"use client";

import React, { useState } from "react";

const CURSOS_DISPONIVEIS = [
  { id_curso: 12, label: "Biotecnologia" },
  { id_curso: 13, label: "Desenvolvimento de Sistemas" },
  { id_curso: 14, label: "Edificações" },
  { id_curso: 15, label: "Eletromecânica" },
  { id_curso: 16, label: "Eletrônica" },
  { id_curso: 17, label: "Farmácia" },
  { id_curso: 18, label: "Manutenção Automotiva" },
  { id_curso: 19, label: "Mecânica" },
  { id_curso: 20, label: "Meio ambiente" },
  { id_curso: 21, label: "Programação de jogos digitais" },
  { id_curso: 22, label: "Química" },
];

function validarCPF(cpf: string): boolean {
  const limpo = cpf.replace(/[^\d]+/g, "");
  if (limpo.length !== 11 || !!limpo.match(/^(.)\1+$/)) return false;
  const cpfs = limpo.split("").map((el) => +el);
  let soma = 0;
  for (let i = 1; i <= 9; i++) soma += cpfs[i - 1] * (11 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== cpfs[9]) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++) soma += cpfs[i - 1] * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== cpfs[10]) return false;
  return true;
}

function validarTelefone(telefone: string): boolean {
  const limpo = telefone.replace(/\D/g, "");
  return limpo.length === 10 || limpo.length === 11;
}

function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export default function InscricaoPesquisaInteresse() {
  const [idCurso1, setIdCurso1] = useState<number | null>(null);
  const [idCurso2, setIdCurso2] = useState<number | null>(null);

  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [outroTelefone, setOutroTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [lgpdAceite, setLgpdAceite] = useState(false);

  const [carregando, setCarregando] = useState(false);
  const [checandoCpf, setChecandoCpf] = useState(false);
  const [erroApi, setErroApi] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);

  const [modalCpfDuplicado, setModalCpfDuplicado] = useState(false);
  const [inscricaoExistente, setInscricaoExistente] = useState<{
    nome_aluno?: string;
    id_curso?: number;
    curso_nome?: string;
    data_inscricao?: string;
  } | null>(null);

  const [erros, setErros] = useState({
    curso1: false,
    cursoDuplicado: false,
    cpf: false,
    whatsapp: false,
    email: false,
  });

  const verificarCpfExistente = async (cpfValor: string): Promise<boolean> => {
    const limpo = cpfValor.replace(/\D/g, "");
    if (limpo.length !== 11 || !validarCPF(cpfValor)) return false;

    setChecandoCpf(true);
    try {
      const res = await fetch("/api/aluno/bycpf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf: limpo }),
      });

      if (res.ok) {
        const data = await res.json();
        setInscricaoExistente(data);
        setModalCpfDuplicado(true);
        return true;
      }
    } catch (err) {
      console.error("Erro ao consultar CPF:", err);
    } finally {
      setChecandoCpf(false);
    }
    return false;
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length <= 11) {
      valor = valor
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    setCpf(valor);
    if (erros.cpf) setErros((prev) => ({ ...prev, cpf: false }));
  };

  const handleTelefoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setTelefone: React.Dispatch<React.SetStateAction<string>>,
    campo: "whatsapp"
  ) => {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length <= 11) {
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      if (valor.length > 9) {
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
      } else {
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
      }
    }
    setTelefone(valor);
    if (erros[campo]) setErros((prev) => ({ ...prev, [campo]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErroApi(null);

    if (!idCurso1) {
      setErros((prev) => ({ ...prev, curso1: true }));
      alert("Por favor, selecione ao menos a 1ª Opção de curso.");
      return;
    }

    if (idCurso1 && idCurso2 && idCurso1 === idCurso2) {
      setErros((prev) => ({ ...prev, cursoDuplicado: true }));
      alert("A 1ª e a 2ª opção não podem ser o mesmo curso.");
      return;
    }

    if (!lgpdAceite) {
      alert("Por favor, declare ciência e aceite os termos da LGPD para prosseguir.");
      return;
    }

    const cpfValido = validarCPF(cpf);
    const whatsValido = validarTelefone(whatsapp);
    const emailValido = validarEmail(email);

    setErros({
      curso1: !idCurso1,
      cursoDuplicado: idCurso1 !== null && idCurso1 === idCurso2,
      cpf: !cpfValido,
      whatsapp: !whatsValido,
      email: !emailValido,
    });

    if (!cpfValido || !whatsValido || !emailValido) {
      alert("Por favor, corrija os campos destacados antes de enviar.");
      return;
    }

    const jaExiste = await verificarCpfExistente(cpf);
    if (jaExiste) return;

    const payload = {
      id_curso: idCurso1,
      id_curso_1: idCurso1,
      id_curso_2: idCurso2 || null,
      nome_aluno: nome.trim(),
      contato_whatsapp: whatsapp.replace(/\D/g, ""),
      telefone: outroTelefone ? outroTelefone.replace(/\D/g, "") : "",
      email_contato: email.trim(),
      cpf: cpf.replace(/\D/g, ""),
      data_inscricao: new Date().toISOString(),
    };

    setCarregando(true);

    try {
      const response = await fetch("/api/inscricao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocorreu um erro ao salvar a inscrição.");
      }

      setEnviado(true);
    } catch (err: any) {
      setErroApi(err.message || "Erro de conexão com o servidor.");
    } finally {
      setCarregando(false);
    }
  };

  const limparFormulario = () => {
    setIdCurso1(null);
    setIdCurso2(null);
    setNome("");
    setWhatsapp("");
    setOutroTelefone("");
    setEmail("");
    setCpf("");
    setLgpdAceite(false);
    setErroApi(null);
    setInscricaoExistente(null);
    setModalCpfDuplicado(false);
    setErros({
      curso1: false,
      cursoDuplicado: false,
      cpf: false,
      whatsapp: false,
      email: false,
    });
  };

  if (enviado) {
    const curso1 = CURSOS_DISPONIVEIS.find((c) => c.id_curso === idCurso1);
    const curso2 = CURSOS_DISPONIVEIS.find((c) => c.id_curso === idCurso2);

    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-5">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            🎉 Inscrição Registrada!
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Obrigado, <strong className="text-slate-900">{nome}</strong>. Sua pesquisa de interesse foi enviada com sucesso ao banco de dados do CEEP Curitiba.
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-sm space-y-2">
            <div>
              <span className="text-xs font-bold uppercase text-slate-400 block">1ª Opção de Curso:</span>
              <strong className="text-blue-700">{curso1?.label}</strong>
            </div>
            {curso2 && (
              <div className="border-t border-slate-200 pt-2">
                <span className="text-xs font-bold uppercase text-slate-400 block">2ª Opção de Curso:</span>
                <strong className="text-slate-700">{curso2?.label}</strong>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setEnviado(false);
              limparFormulario();
            }}
            className="mt-4 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-md"
          >
            Enviar Nova Resposta
          </button>
        </div>
      </div>
    );
  }

  const cursoJaInscrito =
    CURSOS_DISPONIVEIS.find((c) => c.id_curso === inscricaoExistente?.id_curso)?.label ||
    inscricaoExistente?.curso_nome;

  return (
    <div className="bg-slate-50 min-h-screen py-12 relative">
      {modalCpfDuplicado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              ⚠️
            </div>

            <h3 className="text-xl font-extrabold text-slate-900">
              CPF já cadastrado!
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Identificamos que o CPF <strong className="text-slate-800">{cpf}</strong> já possui uma pesquisa de interesse registrada no sistema.
            </p>

            {cursoJaInscrito && (
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-left space-y-1">
                <p className="text-slate-500 font-medium">Inscrição encontrada para:</p>
                <p className="font-bold text-slate-800">{cursoJaInscrito}</p>
                {inscricaoExistente?.nome_aluno && (
                  <p className="text-slate-600">Aluno: {inscricaoExistente.nome_aluno}</p>
                )}
              </div>
            )}

            <p className="text-xs text-slate-500">
              Cada CPF pode preencher a pesquisa de interesse apenas uma vez. Caso precise alterar sua opção, entre em contato com a secretaria do CEEP.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => {
                  setModalCpfDuplicado(false);
                  setCpf("");
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-all shadow-md"
              >
                Corrigir CPF
              </button>
              <button
                type="button"
                onClick={() => setModalCpfDuplicado(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-sm transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            Ensino médio com curso integrado - Inscriões 2027
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Pesquisa de Interesse – Ensino médio com curso integrado
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Caso você gostaria de cursar o ensino médio com um curso profissionalizante para te preparar para o mercado de trabalho, preencha as informações abaixo com os dados do matriculado, para concorrer ao ensino médio 2027 no CEEP Curitiba.
          </p>
        </div>

        {erroApi && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center justify-between">
            <span>⚠️ {erroApi}</span>
            <button
              onClick={() => setErroApi(null)}
              className="text-red-500 font-bold ml-2 hover:text-red-800"
            >
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div
            className={`bg-white p-6 sm:p-8 rounded-2xl border shadow-sm space-y-6 ${
              erros.curso1 || erros.cursoDuplicado ? "border-red-500" : "border-slate-200"
            }`}
          >
            <div className="border-b border-slate-100 pb-2">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                Opções de Cursos Desejados
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Escolha a sua primeira opção (obrigatória) e uma segunda opção alternativa.
              </p>
            </div>

            <div>
              <label htmlFor="curso1" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1ª Opção de Curso <span className="text-red-500">*</span>
              </label>
              <select
                id="curso1"
                required
                value={idCurso1 ?? ""}
                onChange={(e) => {
                  const val = e.target.value ? Number(e.target.value) : null;
                  setIdCurso1(val);
                  if (erros.curso1) setErros((p) => ({ ...p, curso1: false }));
                  if (val && val === idCurso2) setIdCurso2(null);
                }}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all font-medium ${
                  erros.curso1
                    ? "bg-red-50 border-red-500 focus:border-red-600 focus:bg-white"
                    : "bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white"
                }`}
              >
                <option value="">-- Selecione a 1ª opção de curso --</option>
                {CURSOS_DISPONIVEIS.map((item) => (
                  <option key={item.id_curso} value={item.id_curso}>
                    {item.label}
                  </option>
                ))}
              </select>
              {erros.curso1 && (
                <p className="mt-1 text-xs text-red-500 font-medium">
                  Selecione a 1ª opção de curso para continuar.
                </p>
              )}
            </div>

            <div>
              <label htmlFor="curso2" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2ª Opção de Curso <span className="text-slate-400 font-normal">(Opcional / Alternativa)</span>
              </label>
              <select
                id="curso2"
                value={idCurso2 ?? ""}
                onChange={(e) => {
                  const val = e.target.value ? Number(e.target.value) : null;
                  setIdCurso2(val);
                  if (erros.cursoDuplicado) setErros((p) => ({ ...p, cursoDuplicado: false }));
                }}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all font-medium"
              >
                <option value="">-- Selecione a 2ª opção de curso (Opcional) --</option>
                {CURSOS_DISPONIVEIS.map((item) => (
                  <option
                    key={item.id_curso}
                    value={item.id_curso}
                    disabled={item.id_curso === idCurso1}
                  >
                    {item.label} {item.id_curso === idCurso1 ? "(Selecionado na 1ª opção)" : ""}
                  </option>
                ))}
              </select>
              {erros.cursoDuplicado && (
                <p className="mt-1 text-xs text-red-500 font-medium">
                  A 2ª opção de curso deve ser diferente da 1ª opção.
                </p>
              )}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
              Dados de Identificação e Contato
            </h2>

            <div>
              <label
                htmlFor="cpf"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                CPF do aluno <span className="text-red-500">*</span>
                {checandoCpf && (
                  <span className="ml-2 text-blue-600 normal-case font-normal text-xs animate-pulse">
                    Consultando CPF...
                  </span>
                )}
              </label>
              <input
                type="text"
                id="cpf"
                required
                maxLength={14}
                value={cpf}
                onChange={handleCpfChange}
                onBlur={() => {
                  if (validarCPF(cpf)) {
                    verificarCpfExistente(cpf);
                  }
                }}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all ${
                  erros.cpf
                    ? "bg-red-50 border-red-500 focus:border-red-600 focus:bg-white"
                    : "bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white"
                }`}
                placeholder="000.000.000-00"
              />
              {erros.cpf && (
                <p className="mt-1 text-xs text-red-500 font-medium">
                  Por favor, insira um CPF válido.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="nome"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Nome Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  WhatsApp para Contato <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  maxLength={15}
                  value={whatsapp}
                  onChange={(e) =>
                    handleTelefoneChange(e, setWhatsapp, "whatsapp")
                  }
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all ${
                    erros.whatsapp
                      ? "bg-red-50 border-red-500 focus:border-red-600 focus:bg-white"
                      : "bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white"
                  }`}
                  placeholder="(41) 99999-9999"
                />
                {erros.whatsapp && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    Insira um WhatsApp válido com DDD.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="outroTelefone"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Outro Telefone <span className="text-slate-400 font-normal">(Opcional)</span>
                </label>
                <input
                  type="tel"
                  id="outroTelefone"
                  maxLength={15}
                  value={outroTelefone}
                  onChange={(e) => {
                    let v = e.target.value.replace(/\D/g, "");
                    if (v.length <= 11) {
                        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
                        v = v.length > 9 ? v.replace(/(\d{5})(\d)/, "$1-$2") : v.replace(/(\d{4})(\d)/, "$1-$2");
                      }
                    setOutroTelefone(v);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                  placeholder="(41) 3333-3333"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                E-mail para Contato <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (erros.email) setErros((prev) => ({ ...prev, email: false }));
                }}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all ${
                  erros.email
                    ? "bg-red-50 border-red-500 focus:border-red-600 focus:bg-white"
                    : "bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white"
                }`}
                placeholder="seuemail@exemplo.com"
              />
              {erros.email && (
                <p className="mt-1 text-xs text-red-500 font-medium">
                  Insira um e-mail válido.
                </p>
              )}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="text-sm text-slate-600 leading-relaxed">
              <p>
                Declaro que li e estou ciente das informações do presente
                formulário eletrônico de pesquisa de interesse para os cursos
                técnicos subsequentes do CEEP Curitiba. Autorizo o tratamento das
                informações que registrei, nos termos da Lei nº 13.709/2018 (LGPD).{" "}
                <span className="text-red-500">*</span>
              </p>
            </div>

            <div className="pt-2">
              <label
                className={`flex items-center gap-3 p-4 rounded-xl border text-sm font-semibold cursor-pointer transition-all max-w-xs ${
                  lgpdAceite
                    ? "bg-blue-50/70 border-blue-500 text-blue-700 ring-2 ring-blue-500/10"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <input
                  type="checkbox"
                  required
                  checked={lgpdAceite}
                  onChange={(e) => setLgpdAceite(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                Ciente e de acordo
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <button
              type="submit"
              disabled={carregando || checandoCpf}
              className={`w-full sm:w-auto font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm text-center flex items-center justify-center gap-2 ${
                carregando || checandoCpf
                  ? "bg-blue-400 text-white cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/10 hover:-translate-y-0.5"
              }`}
            >
              {carregando ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  Enviando Inscrição...
                </>
              ) : (
                "Enviar Inscrição"
              )}
            </button>

            <button
              type="button"
              disabled={carregando || checandoCpf}
              onClick={limparFormulario}
              className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-200 font-semibold px-6 py-3.5 rounded-xl text-sm transition-all"
            >
              Limpar formulário
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
