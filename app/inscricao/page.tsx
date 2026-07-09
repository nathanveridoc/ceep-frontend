"use client";

import React, { useState } from "react";

// --- FUNÇÕES DE VALIDAÇÃO (Fora do componente) ---

// Valida CPF (Algoritmo oficial)
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

// Valida Celular/WhatsApp: (XX) 9XXXX-XXXX ou Telefone Fixo: (XX) XXXX-XXXX
function validarTelefone(telefone: string): boolean {
  const limpo = telefone.replace(/\D/g, "");
  // Aceita fixo (10 dígitos) ou celular (11 dígitos)
  return limpo.length === 10 || limpo.length === 11;
}

// Valida E-mail padrão
function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export default function InscricaoPesquisaInteresse() {
  // Estados do formulário
  const [curso, setCurso] = useState("");
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [outroTelefone, setOutroTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [lgpdAceite, setLgpdAceite] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Estados de erro visual
  const [erros, setErros] = useState({
    cpf: false,
    whatsapp: false,
    outroTelefone: false,
    email: false,
  });

  // Máscara do CPF
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length <= 11) {
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
      valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    setCpf(valor);
    if (erros.cpf) setErros((prev) => ({ ...prev, cpf: false }));
  };

  // Máscara genérica para telefone (Fixo ou Celular)
  const handleTelefoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setTelefone: React.Dispatch<React.SetStateAction<string>>,
    campo: "whatsapp" | "outroTelefone",
  ) => {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length <= 11) {
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      if (valor.length > 9) {
        // Se for celular (11 dígitos no total), muda a posição do hífen
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
      } else {
        // Se for fixo (10 dígitos no total)
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
      }
    }

    setTelefone(valor);
    if (erros[campo]) setErros((prev) => ({ ...prev, [campo]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!lgpdAceite) {
      alert(
        "Por favor, declare ciência e aceite os termos da LGPD para prosseguir.",
      );
      return;
    }

    // Executa as validações individuais
    const cpfValido = validarCPF(cpf);
    const whatsValido = validarTelefone(whatsapp);
    const outroTelValido = validarTelefone(outroTelefone);
    const emailValido = validarEmail(email);

    // Atualiza o estado de erro de todos de uma vez
    setErros({
      cpf: !cpfValido,
      whatsapp: !whatsValido,
      outroTelefone: !outroTelValido,
      email: !emailValido,
    });

    // Se houver qualquer erro, interrompe o envio
    if (!cpfValido || !whatsValido || !outroTelValido || !emailValido) {
      alert(
        "Por favor, corrija os campos marcados em vermelho antes de enviar.",
      );
      return;
    }

    console.log({
      curso,
      nome,
      whatsapp,
      outroTelefone,
      email,
      cpf,
      lgpdAceite,
    });
    setEnviado(true);
  };

  const limparFormulario = () => {
    setCurso("");
    setNome("");
    setWhatsapp("");
    setOutroTelefone("");
    setEmail("");
    setCpf("");
    setLgpdAceite(false);
    setErros({
      cpf: false,
      whatsapp: false,
      outroTelefone: false,
      email: false,
    });
  };

  if (enviado) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            🎉 Resposta Registrada!
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Obrigado, <strong className="text-slate-900">{nome}</strong>. Sua
            pesquisa de interesse para o curso técnico subsequente foi enviada
            com sucesso ao CEEP Curitiba.
          </p>
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

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CABEÇALHO DA PÁGINA */}
        <div className="mb-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            Período Noturno — 2º Semestre de 2026
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Pesquisa de Interesse – Curso Técnico Subsequente
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Se você já concluiu o Ensino Médio e deseja se especializar
            gratuitamente, preencha as informações abaixo para nos ajudar no
            planejamento das turmas.
          </p>
        </div>

        {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* CARD 1: SELEÇÃO DE CURSO */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider">
              Qual curso técnico subsequente você tem interesse em cursar?{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { id: "biotec", label: "BIOTECNOLOGIA - NOITE" },
                { id: "quimica", label: "QUÍMICA - NOITE" },
                { id: "eletromecanica", label: "ELETROMECÂNICA - NOITE" },
                { id: "mecanica", label: "MECÂNICA - NOITE" },
                { id: "edificacoes", label: "EDIFICAÇÕES - NOITE" },
              ].map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center gap-3 p-4 rounded-xl border font-semibold text-xs sm:text-sm cursor-pointer transition-all ${
                    curso === item.label
                      ? "bg-blue-50/70 border-blue-500 text-blue-700 ring-2 ring-blue-500/10"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="curso_interesse"
                    value={item.label}
                    required
                    checked={curso === item.label}
                    onChange={(e) => setCurso(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          {/* CARD 2: DADOS PESSOAIS */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
              Dados de Identificação e Contato
            </h2>

            {/* Campo: Nome Completo */}
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
                placeholder="Sua resposta"
              />
            </div>

            {/* Grid de Telefones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Campo: WhatsApp */}
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
                    Insira um telefone válido com DDD.
                  </p>
                )}
              </div>

              {/* Campo: Outro Telefone */}
              <div>
                <label
                  htmlFor="outroTelefone"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Outro Telefone para Contato{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="outroTelefone"
                  required
                  maxLength={15}
                  value={outroTelefone}
                  onChange={(e) =>
                    handleTelefoneChange(e, setOutroTelefone, "outroTelefone")
                  }
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all ${
                    erros.outroTelefone
                      ? "bg-red-50 border-red-500 focus:border-red-600 focus:bg-white"
                      : "bg-slate-50 border-slate-200 focus:border-blue-500 focus:bg-white"
                  }`}
                  placeholder="(41) 3333-3333"
                />
                {erros.outroTelefone && (
                  <p className="mt-1 text-xs text-red-500 font-medium">
                    Insira um telefone válido com DDD.
                  </p>
                )}
              </div>
            </div>

            {/* Campo: Email */}
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
                  if (erros.email)
                    setErros((prev) => ({ ...prev, email: false }));
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
                  Insira um endereço de e-mail válido.
                </p>
              )}
            </div>

            {/* Campo: CPF */}
            <div>
              <label
                htmlFor="cpf"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                CPF do aluno <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cpf"
                required
                maxLength={14}
                value={cpf}
                onChange={handleCpfChange}
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
          </div>

          {/* CARD 3: LGPD */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                Declaro que li e estou ciente das informações do presente
                formulário eletrônico de pesquisa de interesse para os cursos
                técnicos subsequentes do CEEP Curitiba. Autorizo o tratamento
                das informações que registrei, nos termos do art. 7º, incisos
                II, III e IV da Lei nº 13.709/2018 (LGPD - Lei Geral de Proteção
                de Dados), sobre as informações deste formulário.{" "}
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

          {/* BOTÕES DE AÇÃO INFERIORES */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/10 transition-all hover:-translate-y-0.5 text-sm text-center"
            >
              Enviar Inscrição
            </button>

            <button
              type="reset"
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
