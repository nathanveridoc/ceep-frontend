import React from 'react';

export default function DetalheCursoEletronica() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Eletrônica
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/conteudos-integrado-2026-eletronica.pdf" 
              download="Conteudos_Integrados_2026_Eletrônica.pdf"
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
              Baixar Matriz Curricular e Conteúdo das unidades curriculares do Itinerário Formativo – Parte Técnica – do Curso Técnico em Eletrônica Integrado ao Ensino Médio 2026 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-2024-eletronica.pdf" 
              download="Matriz_Curricular_2024_Eletrônica.pdf"
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
              Baixar Matriz Curricular do Curso Eletrônica Integrado 2024 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-2023-eletronica.pdf" 
              download="Matriz_Curricular_2023_Eletrônica.pdf"
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
              Baixar Matriz Curricular do Curso Eletrônica Integrado 2023 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-eletronica.pdf" 
              download="Plano_de_Curso_Eletrônica.pdf"
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
              Baixar Plano de Curso Eletrônica Integrado 2023 (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Eletrônica será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Planejar, controlar e executar projetos eletrônicos com dispositivos analógicos, digitais, de potência e microcontrolados.",
                    "Executar e supervisionar a instalação e a manutenção de equipamentos e sistemas eletrônicos e robotizados.",
                    "Atuar em sistemas de telemetria e telecomunicações.",
                    "Garantir a conformidade com as normas de qualidade, saúde, segurança e meio ambiente.",
                    "Realizar medições, testes, calibrações e comissionamento de equipamentos eletrônicos.",
                    "Reconhecer tecnologias inovadoras presentes no segmento visando a atender às transformações digitais."
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
                <p>Para atuação como Técnico em Eletrônica, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes relacionados aos processos de planejamento e implementação de sistemas eletrônicos de modo a assegurar a saúde e a segurança dos trabalhadores e dos usuários.</p>
                <p className="mt-4">Conhecimentos e saberes relacionados à sustentabilidade do processo produtivo, às técnicas e processos de produção, às normas técnicas, à liderança de equipes, à solução de problemas técnicos e trabalhistas e à gestão de conflitos.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Empresas de instalação e manutenção de informática e produtos eletrônicos",
                    "Comercialização de equipamentos e sistemas eletrônicos/robotizados",
                    "Grupos de pesquisa e laboratórios de desenvolvimento de sistemas eletrônicos",
                    "Laboratórios de controle de qualidade, calibração e manutenção",
                    "Concessionárias e prestadores de serviços de eletrônica e telecomunicações"
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
                    <p>Controle e Processos Industriais</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Área Tecnológica</span>
                    <p>Eletrônica e Automação</p>
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
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">CBOs Associadas</span>
                    <ul className="list-disc pl-4 space-y-0.5 mt-1">
                      <li>3132-15 – Técnico Eletrônico</li>
                      <li>3132-05 – Manutenção Eletrônica</li>
                      <li>3132-10 – Circuitos de Máquinas CNC</li>
                      <li>3132-20 – Equipamentos de Informática</li>
                    </ul>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-3 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin">
                  <p>• Lei nº 13.639/2018 (Criação dos Conselhos CFT/CRT)</p>
                  <p>• Resolução CFT nº 86/2019 (Tabela de profissionais no SINCETI)</p>
                  <p>• Resolução CFT nº 100/2020 (Projetos de Prevenção e Combate a Incêndio)</p>
                  <p>• Lei nº 5.524/1968 (Exercício da profissão de Técnico Industrial)</p>
                  <p>• Decreto nº 90.922/1985 e Decreto nº 4.560/2002 (Regulamentação e Alterações)</p>
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
                <li>• Montador de Equipamentos Eletroeletrônicos</li>
                <li>• Reparador de Circuitos Eletrônicos</li>
                <li>• Eletrônico de Sistemas Microcontrolados</li>
                <li>• Operador em Linha de Montagem Eletroeletrônica</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                <li>• Robótica Industrial e Redes Industriais</li>
                <li>• Automação com Telemetria e Telecomunicações</li>
                <li>• Automação Predial (Domótica), Residencial e Industrial</li>
                <li>• Acionamentos de Servomotores Industriais</li>
                <li>• Eficiência Energética Industrial e em Edificações</li>
                <li>• Manutenção em Equipamentos de Energias Alternativas</li>
                <li>• Energia Solar Fotovoltaica</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Verticalização (Graduação)</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                <li>• CST em Eletrônica / Automação Industrial</li>
                <li>• CST em Mecatrônica / Manutenção Industrial</li>
                <li>• CST em Eletrotécnica / Sistemas Elétricos</li>
                <li>• Bacharelado em Engenharia Eletrônica / Elétrica</li>
                <li>• Bacharelado em Engenharia de Automação e Mecatrônica</li>
                <li>• Bacharelado em Engenharia de Computação / Telecomunicações</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}