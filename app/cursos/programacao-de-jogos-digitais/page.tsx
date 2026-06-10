import React from 'react';

export default function DetalheCursoJogosDigitais() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Programação de Jogos Digitais
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-programacao-de-jogos-digitais.pdf" 
              download="Plano_de_Curso_Programação_de_Jogos_Digitais.pdf"
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
              Baixar Plano de Curso em Programação de Jogos Digitais (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-programacao-de-jogos-digitais.pdf" 
              download="Matriz_Curricular_Programação_de_Jogos_Digitais.pdf"
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
              Baixar Matriz Curricular de Programação de Jogos Digitais (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Programação de Jogos Digitais será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Planejar o desenvolvimento global do jogo digital para multiplataformas.",
                    "Planejar e cronometrar as atividades e sprints de programação do jogo.",
                    "Configurar e incorporar elementos multimídia à engine de desenvolvimento.",
                    "Desenvolver e selecionar algoritmos e estruturas de dados otimizadas para jogos.",
                    "Programar e integrar elementos de áudio e arte para computadores, consoles e mobile.",
                    "Desenvolver e programar arquiteturas de jogos digitais multiplayer.",
                    "Realizar testes unitários, de QA e manutenção contínua em jogos digitais."
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
                <p>Para atuação como Técnico em Programação de Jogos Digitais, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes técnicos profundos relacionados aos processos de lógica de programação, matemática computacional, física para jogos e estruturação de arquiteturas estáveis e escaláveis nas principais game engines do mercado.</p>
                <p className="mt-4">Domínio no ciclo de produção de conteúdo e roteirização (storytelling), aliado à expertise do trabalho em equipes multidisciplinares (artistas, designers e testers). Métodos ágeis de liderança, comunicação assertiva e geração de relatórios técnicos de bugs são essenciais para garantir o cumprimento de prazos e o perfil de qualidade do produto.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Estúdios e Empresas de Desenvolvimento de Jogos (Indie ou AAA)",
                    "Agências de Publicidade, Propaganda e Marketing Digital",
                    "Estúdios de Animação e Efeitos Visuais",
                    "Startups de Tecnologia, Interatividade e Conteúdo Digital",
                    "Instituições de Ensino e Empresas de Gamificação Educacional",
                    "Produtoras de Software sob Demanda e Simuladores Virtuais",
                    "Atuação Freelancer e Desenvolvimento Independente"
                  ].map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* COLUNA DIREITA - Informações Técnicas */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Card de Informações Institucionais e Diretrizes */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:mt-14">
               <h3 className="font-bold text-slate-900 mb-4">Diretrizes e Requisitos</h3>
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
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Pré-requisitos de Ingresso</span>
                    <ul className="list-disc pl-4 space-y-1 mt-1">
                      <li><strong>Subsequente:</strong> Ensino Médio concluído.</li>
                      <li><strong>Integrado:</strong> Ensino Fundamental concluído.</li>
                      <li><strong>PROEJA:</strong> Ensino Fundamental concluído.</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">CBO Associada</span>
                    <p>3171-20 – Programador de Multimídia</p>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
                  <p className="font-semibold mb-1">Profissão Não Regulamentada</p>
                  <p>A atividade profissional na área de desenvolvimento e programação de jogos eletrônicos no Brasil atualmente não depende de inscrição em conselho profissional regulamentado por lei federal, sendo regida pelo livre mercado tecnológico.</p>
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
                <li>• Programador de Jogos para Web</li>
                <li>• Programador de Aplicativos para Mídias Digitais</li>
                <li>• Programador de Jogos Eletrônicos</li>
                <li>• Programador de Jogos para Dispositivos Móveis</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Especialização em Roteirização de Jogos Digitais</li>
                <li>• Especialização em Modelagem e Animação 3D</li>
                <li>• Especialização Técnica em Masterização e Sonorização</li>
                <li>• Especialização Avançada em Realidade Virtual (VR) e AR</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Verticalização (Graduação)</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                <li>• CST em Jogos Digitais / Sistemas para Internet</li>
                <li>• CST em Análise e Desenvolvimento de Sistemas</li>
                <li>• Bacharelado em Ciência da Computação / Engenharia de Software</li>
                <li>• Bacharelado em Sistemas de Informação / Engenharia da Computação</li>
                <li>• CST em Segurança da Informação / Gestão da TI</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}