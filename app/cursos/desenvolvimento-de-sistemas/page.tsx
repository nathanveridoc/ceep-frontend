import React from 'react';

export default function DetalheCursoDesenvolvimentoSistemas() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Desenvolvimento de Sistemas
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-desenvolvimento-de-sistemas.pdf" 
              download="Plano_de_Curso_Desenvolvimento_de_Sistemas.pdf"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm border border-slate-200 transition-all duration-200 group"
            >
              <svg 
                className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar Plano de Curso em Desenvolvimento de Sistemas (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-desenvolvimento-de-sistemas.pdf" 
              download="Matriz_Curricular_Desenvolvimento_de_Sistemas.pdf"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm border border-slate-200 transition-all duration-200 group"
            >
              <svg 
                className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Baixar Matriz Curricular do Curso Técnico em Desenvolvimento de Sistemas (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Desenvolvimento de Sistemas será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Desenvolver sistemas computacionais utilizando ambiente de desenvolvimento.",
                    "Dimensionar requisitos e funcionalidades do sistema.",
                    "Realizar testes funcionais de programas de computador e aplicativos.",
                    "Manter registros para análise e refinamento de resultados.",
                    "Executar manutenção de programas de computador e suporte técnico.",
                    "Realizar modelagem de aplicações computacionais.",
                    "Codificar aplicações e rotinas utilizando linguagens de programação específicas.",
                    "Executar alterações e manutenções em aplicações de acordo com as definições.",
                    "Prestar apoio técnico na elaboração da documentação de sistemas.",
                    "Realizar prospecções, testes e avaliações de ferramentas e produtos."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fundamentos da Profissão</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-slate-600 leading-relaxed">
                <p>Para atuação como Técnico em Desenvolvimento de Sistemas, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes relacionados aos processos de planejamento e execução de projetos computacionais de forma a garantir a entrega de produtos digitais, análise de softwares, testagem de protótipos, de acordo com suas finalidades.</p>
                <p className="mt-4">Conhecimentos e saberes relacionados às normas técnicas, à liderança de equipes, à solução de problemas técnicos e à assertividade na comunicação de laudos e análises.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Empresas de desenvolvimento de sistemas", 
                    "Organizações governamentais e não governamentais", 
                    "Empresas de consultoria em sistemas", 
                    "Empresas de soluções em análise de dados", 
                    "Profissional autônomo"
                  ].map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* COLUNA DIREITA - Informações Técnicas */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm md:mt-14">
               <h3 className="font-bold text-slate-900 mb-4">Diretrizes e Pré-Requisitos</h3>
               <div className="text-xs text-slate-500 space-y-4">
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Eixo Tecnológico</span>
                    <p>Informação e Comunicação</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Área Tecnológica</span>
                    <p>Desenvolvimento de Sistemas</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">CBO Associada</span>
                    <p>3171-10 – Desenvolvedor de Sistemas de TI</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Requisitos de Ingresso</span>
                    <ul className="list-disc pl-4 space-y-1 mt-1">
                      <li><strong>Subsequente:</strong> Ter concluído o Ensino Médio.</li>
                      <li><strong>Integrado:</strong> Ter concluído o Ensino Fundamental.</li>
                      <li><strong>PROEJA:</strong> Ter concluído o Ensino Fundamental.</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Legislação Profissional</span>
                    <p className="italic text-slate-400">Profissão não regulamentada</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* ITINERÁRIOS FORMATIVOS (Full Width no final) */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Itinerários Formativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Certificações Intermediárias</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Programador de Sistemas</li>
                <li>• Desenvolvedor Front-End / Back-End</li>
                <li>• Desenvolvedor Mobile</li>
                <li>• Administrador de Banco de Dados</li>
                <li>• Agente de Inclusão Digital</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Segurança da Informação</li>
                <li>• Inteligência Artificial & Machine Learning</li>
                <li>• Internet das Coisas (IoT)</li>
                <li>• Ciência de Dados & Analytics</li>
                <li>• Comércio Eletrônico</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Verticalização (Graduação)</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Análise e Desenvolvimento de Sistemas</li>
                <li>• Engenharia de Software / Ciência da Computação</li>
                <li>• Sistemas de Informação / Sistemas para Internet</li>
                <li>• Gestão de TI / Segurança da Informação</li>
                <li>• Banco de Dados / Jogos Digitais</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}