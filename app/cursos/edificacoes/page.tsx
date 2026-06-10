import React from 'react';

export default function DetalheCursoEdificacoes() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Edificações
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-edificacoes.pdf" 
              download="Plano_de_Curso_Edificações.pdf"
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
              Baixar Plano de Curso em Edificações (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-edificacoes.pdf" 
              download="Matriz_Curricular_Edificações.pdf"
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
              Baixar Matriz Curricular do Curso Técnico em Edificações (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Edificações será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Desenvolver projetos de arquitetura, estrutura, instalações elétricas e hidrossanitárias de até 80 m² usando meios físicos ou digitais.",
                    "Elaborar orçamentos de obras e serviços.",
                    "Planejar a execução dos serviços de construção e manutenção predial.",
                    "Executar obras e serviços de construção e manutenção predial.",
                    "Executar ensaios de materiais de construção, solos e controle tecnológico.",
                    "Conduzir planos de qualidade da construção.",
                    "Coordenar a execução de serviços de manutenção de equipamentos e instalações em edificações."
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
                <p>Para atuação como Técnico em Edificações, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes relacionados aos processos de planejamento e construção de edificações de modo a assegurar a saúde e a segurança dos trabalhadores e dos futuros ocupantes do imóvel.</p>
                <p className="mt-4">Conhecimentos e saberes relacionados à sustentabilidade do processo produtivo, às técnicas e processos de produção na construção civil, e às normas técnicas vigentes.</p>
                <p className="mt-4">Habilidades e competências relacionadas à liderança de equipes, à solução de problemas técnicos e trabalhistas e à gestão de conflitos no ambiente de trabalho.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Construtoras", 
                    "Empresas de projetos", 
                    "Canteiros de Obras", 
                    "Escritórios de Engenharia e Arquitetura", 
                    "Empresas de material de construção", 
                    "Órgãos públicos", 
                    "Empresas privadas"
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
                    <p>Infraestrutura</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Área Tecnológica</span>
                    <p>Construção de Obras</p>
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
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">CBO Associada Principal</span>
                    <p>3121-05 – Técnico de Edificações</p>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-3">
                  <p>• Resolução CFT nº 058/2019 (Prerrogativas e Atribuições)</p>
                  <p>• Lei nº 5.524/1968 (Exercício da profissão de Técnico Industrial)</p>
                  <p>• Decreto nº 90.922/1985 (Regulamentação da profissão)</p>
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
                <li>• Cadista para a Construção Civil</li>
                <li>• Desenhista de Arquitetura / Detalhista</li>
                <li>• Desenhista Calculista na Construção Civil</li>
                <li>• Orçamentista da Construção Civil</li>
                <li>• Laboratorista / Mestre de Obras</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Modelagem em Informação da Construção (BIM)</li>
                <li>• Eficiência Energética em Edificações</li>
                <li>• Conservação e Restauro de Construções</li>
                <li>• Licitação de Obras Públicas</li>
                <li>• Programas de Qualidade na Construção Civil</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Verticalização (Graduação)</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Bacharelado em Engenharia Civil / Arquitetura</li>
                <li>• CST em Construção de Edifícios / Controle de Obras</li>
                <li>• CST em Material de Construção / Obras Hidráulicas</li>
                <li>• Bacharelado em Engenharia Sanitária e Ambiental</li>
                <li>• CST em Agrimensura / Engenharia Cartográfica</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}