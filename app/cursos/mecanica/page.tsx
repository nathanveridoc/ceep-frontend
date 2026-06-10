import React from 'react';

export default function DetalheCursoMecanica() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Mecânica
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/conteudos-integrado-mecanica-2026.pdf" 
              download="Conteudos_Integrados_2026_Mecânica.pdf"
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
              Baixar Matriz Curricular e Conteúdo das unidades curriculares do Itinerário Formativo – Parte Técnica – do Curso Técnico em Mecânica Integrado ao Ensino Médio 2026 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-mecanica-2024.pdf" 
              download="Matriz_Curricular_2024_Mecânica.pdf"
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
              Baixar Matriz Curricular do Curso Técnico em Mecânica 2024 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-mecanica-2023.pdf" 
              download="Matriz_Curricular_2023_Mecânica.pdf"
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
              Baixar Matriz Curricular do Curso Técnico em Mecânica 2023 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-mecanica.pdf" 
              download="Plano_de_Curso_Mecânica.pdf"
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
              Baixar Plano de Curso em Mecânica 2023 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-subsequente-2016-mecanica.pdf" 
              download="Matriz_Curricular_Subsequente_2016_Mecânica.pdf"
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
              Baixar Matriz Curricular e Conteúdo das unidades curriculares do Curso Técnico em Mecânica Subsequente ao Ensino Médio 2016/2º Semestre (PDF)
            </a>
          </div>
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Mecânica será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Programar, controlar e executar processos de fabricação mecânica para máquinas e equipamentos.",
                    "Planejar, aplicar e controlar procedimentos de instalação, manutenção e inspeção mecânica.",
                    "Elaborar projetos de produtos relacionados a máquinas e equipamentos mecânicos.",
                    "Especificar materiais para construção mecânica por técnicas de usinagem, soldagem e conformação.",
                    "Realizar inspeção visual, dimensional e testes em sistemas mecânicos, pneumáticos e hidráulicos.",
                    "Avaliar instrumentos eletromecânicos de máquinas e bancadas industriais.",
                    "Reconhecer tecnologias inovadoras do segmento visando a atender às transformações digitais."
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
                <p>Para atuação como Técnico em Mecânica, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes relacionados aos processos de planejamento, produção e manutenção de equipamentos mecânicos de modo a assegurar a saúde e a segurança dos trabalhadores e dos usuários.</p>
                <p className="mt-4">Conhecimentos e saberes relacionados à sustentabilidade do processo produtivo, às técnicas e aos processos de produção, às normas técnicas, à liderança de equipes, à solução de problemas técnicos e trabalhistas e à gestão de conflitos.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Indústrias Metalmecânicas",
                    "Indústrias Automobilísticas e Aeroespaciais",
                    "Indústrias de Alimentos e Bebidas",
                    "Indústrias de Produtos Químicos, Borracha e Plástico",
                    "Fábricas de Máquinas, Equipamentos e Motores",
                    "Indústrias de Instrumentos Médico-Hospitalares",
                    "Setores de Calibração e Instrumentos de Medida",
                    "Empresas de Manutenção e Montagem Industrial",
                    "Indústrias Têxteis"
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
                    <p>Metalmecânica</p>
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
                      <li>3141-10 – Técnico Mecânico</li>
                      <li>3141-05 – Técnico em Mecânica de Precisão</li>
                      <li>9151-05 – Mnt. de Instrumentos de Medição</li>
                    </ul>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                  <p>• <strong>Resolução CFT nº 101/2020:</strong> Disciplina as prerrogativas e atribuições do Técnico em Mecânica.</p>
                  <p>• <strong>Resolução CFT nº 68/2019:</strong> Habilitação para elaboração do PMOC em sistemas de climatização.</p>
                  <p>• <strong>Lei nº 13.639/2018:</strong> Criação dos Conselhos Federal e Regionais dos Técnicos Industriais.</p>
                  <p>• <strong>Resolução CFT nº 100/2020:</strong> Habilitação em Projetos de Prevenção e Combate a Incêndio.</p>
                  <p>• <strong>Decreto nº 90.922/1985 e nº 4.560/2002:</strong> Regulamentação do exercício da profissão.</p>
                  <p>• <strong>Lei nº 5.524/1968:</strong> Dispõe sobre a profissão de Técnico Industrial de nível médio.</p>
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
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Auxiliar de Desenhista Projetista Mecânico</li>
                <li>• Operador de Máquinas de Usinagem Convencionais</li>
                <li>• Traçador de Caldeiraria e Soldador Industrial</li>
                <li>• Assistente de Planejamento de Manutenção</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Especialização em Programação e Operação de CNC</li>
                <li>• Especialização em Sistemas Hidráulicos e Pneumáticos Avançados</li>
                <li>• Especialização Técnica em Inspeção de Soldagem e Ensaios Não Destrutivos</li>
                <li>• Gestão de Manutenção Preventiva e Corretiva (PMOC)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Verticalização (Graduação)</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• CST em Fabricação Mecânica / Processos Metalúrgicos</li>
                <li>• CST em Manutenção Industrial / Mecatrônica Industrial</li>
                <li>• Bacharelado em Engenharia Mecânica / Mecatrônica</li>
                <li>• Bacharelado em Engenharia de Produção / Metalúrgica</li>
                <li>• Bacharelado em Engenharia de Controle e Automação</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}