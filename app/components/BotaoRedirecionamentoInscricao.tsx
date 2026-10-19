import React from "react";
import Link from "next/link";

interface BotaoRedirecionamentoInscricaoProps {
  nomeCurso?: string;
  anoLetivo?: string;
}

export default function BotaoRedirecionamentoInscricao({
  nomeCurso,
  anoLetivo = "2027",
}: BotaoRedirecionamentoInscricaoProps) {
  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-900/20 overflow-hidden text-center sm:text-left">
        {/* Efeitos decorativos de fundo */}
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-md">
              Vagas para {anoLetivo}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Interessado no {nomeCurso ? `curso de ${nomeCurso}` : "curso"}?
            </h3>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
              Preencha a nossa pesquisa de interesse gratuita e garanta sua participação no planejamento das turmas do CEEP Curitiba.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/inscricao"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-amber-400 text-blue-900 hover:text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] text-sm sm:text-base"
            >
              <span>Fazer Inscrição / Pesquisa</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
