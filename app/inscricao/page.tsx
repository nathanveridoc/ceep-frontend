"use client";

import React, { useState } from "react";

export default function InscricaoPesquisaInteresse() {
  // Estados para gerenciar o formulário
  const [curso, setCurso] = useState("");
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [outroTelefone, setOutroTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [lgpdAceite, setLgpdAceite] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // Função para simular ou processar o envio
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lgpdAceite) {
      alert("Por favor, declare ciência e aceite os termos da LGPD para prosseguir.");
      return;
    }
    
    // Aqui você integraria com sua API ou banco de dados futuramente
    console.log({ curso, nome, whatsapp, outroTelefone, email, lgpdAceite });
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">🎉 Resposta Registrada!</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Obrigado, <strong className="text-slate-900">{nome}</strong>. Sua pesquisa de interesse para o curso técnico subsequente foi enviada com sucesso ao CEEP Curitiba.
          </p>
          <button
            onClick={() => setEnviado(false)}
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
            Se você já concluiu o Ensino Médio e deseja se especializar gratuitamente, preencha as informações abaixo para nos ajudar no planejamento das turmas.
          </p>
        </div>

        {/* FORMULÁRIO */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* CARD 1: SELEÇÃO DE CURSO */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider">
              Qual curso técnico subsequente você tem interesse em cursar? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { id: "biotec", label: "BIOTECNOLOGIA - NOITE" },
                { id: "quimica", label: "QUÍMICA - NOITE" },
                { id: "eletromecanica", label: "ELETROMECÂNICA - NOITE" },
                { id: "mecanica", label: "MECÂNICA - NOITE" },
                { id: "edificacoes", label: "EDIFICAÇÕES - NOITE" }
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
              <label htmlFor="nome" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                <label htmlFor="whatsapp" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp para Contato <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                  placeholder="(41) 90000-0000"
                />
              </div>

              {/* Campo: Outro Telefone */}
              <div>
                <label htmlFor="outroTelefone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Outro Telefone para Contato <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  id="outroTelefone" 
                  required
                  value={outroTelefone}
                  onChange={(e) => setOutroTelefone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                  placeholder="(41) 3000-0000"
                />
              </div>
            </div>

            {/* Campo: Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                E-mail para Contato <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                placeholder="seuemail@exemplo.com"
              />
            </div>
          </div>

          {/* CARD 3: LGPD */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                Declaro que li e estou ciente das informações do presente formulário eletrônico de pesquisa de interesse para os cursos técnicos subsequentes do CEEP Curitiba. Autorizo o tratamento das informações que registrei, nos termos do art. 7º, incisos II, III e IV da Lei nº 13.709/2018 (LGPD - Lei Geral de Proteção de Dados), sobre as informações deste formulário. <span className="text-red-500">*</span>
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
              onClick={() => {
                setCurso(""); setNome(""); setWhatsapp(""); setOutroTelefone(""); setEmail(""); setLgpdAceite(false);
              }}
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