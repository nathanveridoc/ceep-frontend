import React from "react";

export default function Localizacao() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* BANNER DE CABEÇALHO */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-slate-50 py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-4">
            Como Chegar
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Localização Institucional
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Nossa infraestrutura está localizada no bairro Boqueirão, com fácil acesso por diversas linhas de transporte público de Curitiba.
          </p>
        </div>
      </section>

      {/* SEÇÃO DO MAPA E DETALHES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUNA DO MAPA INTERATIVO (Ocupa 8 colunas no desktop) */}
          <div className="lg:col-span-8 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm h-[450px] sm:h-[550px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.289959238665!2d-49.24522772460836!3d-25.495374477520173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfadf747a6ff7%3A0xad589edfddaa5e7f!2sCentro%20Estadual%20de%20Educa%C3%A7%C3%A3o%20Profissional%20de%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1729115214712!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-2xl border-0 shadow-inner"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização do CEEP Curitiba"
            />
          </div>

          {/* COLUNA DE INFORMAÇÕES TEXTUAIS (Ocupa 4 colunas no desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Card com Dados de Endereço */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-grow">
              <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
                Endereço Oficial
              </h2>
              
              <div className="space-y-6">
                {/* Bloco de Endereço com Ícone SVG de Marcador */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Logradouro</h3>
                    <p className="text-slate-800 text-sm font-medium leading-relaxed">
                      Rua Frederico Maurer, 3015
                    </p>
                    <p className="text-slate-600 text-sm">
                      Bairro Boqueirão
                    </p>
                    <p className="text-slate-600 text-sm">
                      Curitiba - PR
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      CEP: 81670-020
                    </p>
                  </div>
                </div>

                {/* Bloco de Telefone com Ícone SVG de Telefone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 0 1-7.147-7.149c-.145-.438.019-.926.395-1.208l1.244-.98c.372-.293.522-.779.385-1.218L2.983 3.15a1.125 1.125 0 0 0-1.073-.78H1.5A1.125 1.125 0 0 0 .375 3.5v3.25c0 .01.004.02.005.03Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Telefone de Contato</h3>
                    <p className="text-slate-800 text-base font-bold">
                      (41) 3284-6820
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Rotas Rápidas */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl text-white shadow-lg">
              <h3 className="font-bold text-base mb-2">Vai de transporte público?</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                As linhas de ônibus que passam próximas à instituição incluem o alimentador ligeirinho e biarticulados com integração direta pelo Terminal do Carmo ou Terminal do Boqueirão.
              </p>
              <a 
                href="https://maps.google.com/?q=Centro+Estadual+de+Educação+Profissional+de+Curitiba"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs shadow-md transition-all"
              >
                Abrir direto no Google Maps
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}