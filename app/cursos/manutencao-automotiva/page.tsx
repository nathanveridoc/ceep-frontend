import React from 'react';

export default function DetalheCursoManutencaoAutomotiva() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Manutenção Automotiva
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-2026-manutencao-automotiva.pdf" 
              download="Matriz_Curricular_2026_Manutenção_Automotiva.pdf"
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
              Baixar Matriz Curricular e Conteúdo das unidades curriculares do Itinerário Formativo – Parte Técnica – do Curso Técnico em Manutenção Automotiva Integrado ao Ensino Médio 2026 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-manutencao-automotiva.pdf" 
              download="Plano_de_Curso_Manutenção_Automotiva.pdf"
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
              Baixar Plano de Curso em Manutenção Automotiva 2023 (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-manutencao-automotiva.pdf" 
              download="Matriz_Curricular_Manutenção_Automotiva.pdf"
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
              Baixar Matriz Curricular do Curso Técnico em Manutenção Automotiva 2023 (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Manutenção Automotiva será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Programar, controlar e executar planos de manutenção preventiva em veículos seguindo normas dos fabricantes.",
                    "Executar manutenção preventiva e corretiva em sistemas elétricos e mecânicos de veículos a ciclo Otto e Diesel.",
                    "Utilizar ferramentas específicas e instrumentos de medição de alta precisão.",
                    "Controlar a emissão de gases poluentes e reparar defeitos eletrônicos com scanners e dispositivos de teste.",
                    "Identificar a conformidade de documentações legais para circulação do veículo em vias públicas.",
                    "Reconhecer e atuar com tecnologias inovadoras do segmento, tais como veículos elétricos e híbridos.",
                    "Atender aos padrões técnicos de qualidade, saúde, segurança e sustentabilidade ambiental."
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
                <p>Para atuação como Técnico em Manutenção Automotiva, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes relacionados aos processos de diagnóstico e manutenção de sistemas veiculares avançados, de modo a assegurar a integridade física dos trabalhadores e a segurança ativa e passiva dos usuários nas vias.</p>
                <p className="mt-4">Conhecimentos e saberes relacionados à sustentabilidade dos processos produtivos (descarte correto de fluidos e componentes), cumprimento de normas técnicas vigentes, liderança de equipes operacionais, solução de problemas técnicos/trabalhistas e gestão adaptativa de conflitos.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Montadoras de Veículos",
                    "Concessionárias e Revendas",
                    "Oficinas Mecânicas e Autoelétricas",
                    "Fabricantes e Lojas de Autopeças / Motopeças",
                    "Centros de Customização e Preparação Automotiva",
                    "Oficinas de Chapeação e Repintura",
                    "Empresas de Vistoria e Certificação Veicular",
                    "Seguradoras (Perito Automotivo)",
                    "Força Aérea Brasileira e Setores de Logística"
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
                    <p>Manutenção e Operação</p>
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
                      <li>3143-05 – Técnico em Automobilística</li>
                      <li>3144-05 – Técnico de Manutenção de Sistemas</li>
                    </ul>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-3">
                  <p>• Lei nº 13.639/2018 (Criação do Sistema CFT/CRT)</p>
                  <p>• Resolução CFT nº 86/2019 (Tabela de Títulos Profissionais no SINCETI)</p>
                  <p>• Lei nº 5.524/1968 (Dispõe sobre a Profissão de Técnico Industrial)</p>
                  <p>• Decreto nº 90.922/1985 (Regulamentação da Atividade Técnica Geral)</p>
               </div>
            </div>

          </div>
        </div>

        {/* ITINERÁRIOS FORMATIVOS (Full Width no final) */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Itinerários Formativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Qualificação</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Mecânico de Motores Ciclo Otto</li>
                <li>• Eletricista de Sistemas Automotivos</li>
                <li>• Auxiliar de Mecânica de Diesel</li>
                <li>• Reparador de Sistemas de Injeção Eletrônica</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Manutenção de Veículos Elétricos e Híbridos</li>
                <li>• Diagnóstico Avançado com Scanner Automotivo</li>
                <li>• Gestão de Oficinas e Pós-Venda</li>
                <li>• Sistemas de Injeção Direta e Turbocompressores</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Graduação</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• CST em Sistemas Automotivos</li>
                <li>• CST em Manutenção Industrial</li>
                <li>• Bacharelado em Engenharia Mecânica</li>
                <li>• Bacharelado em Engenharia Automobilística</li>
                <li>• Bacharelado em Engenharia de Produção</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}