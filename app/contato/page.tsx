import React from 'react';

export default function Contato() {
  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="relative bg-gradient-to-b from-blue-50 via-white to-slate-50 py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-4">
            Atendimento ao Público
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Fale Conosco
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Tem dúvidas sobre matrículas, cursos ou funcionamento das aulas? Utilize o formulário abaixo ou nossos canais diretos.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Envie uma Mensagem</h2>
              <p className="text-xs text-slate-500">Utilize o formulário abaixo para entrar em contato conosco:</p>
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Número de Telefone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                  placeholder="(41) 90000-0000"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                    placeholder="exemplo@email.com"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">E-mail de contato</span>
                </div>

                <div>
                  <label htmlFor="confirmar-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Confirmar E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="confirmar-email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all"
                    placeholder="exemplo@email.com"
                  />
                  <span className="text-[10px] text-slate-400 mt-1 block">Confirme o e-mail digitado</span>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Comentário ou Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  required
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all resize-none"
                  placeholder="Escreva sua mensagem aqui detalhadamente..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-blue-500/10 transition-all hover:-translate-y-0.5"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 space-y-6">

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
                Canais de Atendimento
              </h3>

              <div className="text-xs text-slate-600 space-y-3">
                <div>
                  <span className="font-bold block text-slate-700 uppercase tracking-wider mb-0.5">📍 Endereço</span>
                  <p>Rua Frederico Maurer, 3015 - Boqueirão, Curitiba - PR, 81670-020</p>
                </div>
                <div>
                  <span className="font-bold block text-slate-700 uppercase tracking-wider mb-0.5">📞 Telefone</span>
                  <p>(41) 3284-6820</p>
                </div>
                <div>
                  <span className="font-bold block text-slate-700 uppercase tracking-wider mb-0.5">⏰ Horário de Funcionamento</span>
                  <p>Segunda a Sexta — Manhã, Tarde e Noite (Secretaria até as 22:00)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
