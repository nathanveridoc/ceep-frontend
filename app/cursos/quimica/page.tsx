import React from 'react';

export default function DetalheCursoQuimica() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Química
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-quimica.pdf" 
              download="Plano_de_Curso_Química.pdf"
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
              Baixar Plano de Curso em Química (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-quimica.pdf" 
              download="Matriz_Curricular_Química.pdf"
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
              Baixar Matriz Curricular de Química (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Química será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Operar, controlar e monitorar processos industriais e laboratoriais químicos.",
                    "Controlar a qualidade de matérias-primas, insumos e produtos acabados.",
                    "Realizar amostragens, análises químicas, físico-químicas e microbiológicas.",
                    "Desenvolver novos produtos e otimizar processos de transformação química.",
                    "Comprar, estocar e gerenciar o inventário de matérias-primas e insumos.",
                    "Realizar a especificação técnica de produtos e processos industriais.",
                    "Selecionar fornecedores e insumos alinhados aos padrões técnicos de qualidade."
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
                <p>Para atuação como Técnico em Química, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes relacionados aos processos de planejamento e operação das atribuições da área, de modo a assegurar a saúde e a segurança dos trabalhadores e dos futuros usuários e operadores de empresas em processos de transformação em química.</p>
                <p className="mt-4">Conhecimentos e saberes relacionados à sustentabilidade do processo produtivo, às normas e relatórios técnicos, à legislação da área, às novas tecnologias relacionadas à indústria 4.0, à liderança de equipes, à solução de problemas técnicos e à gestão de conflitos.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Indústrias Químicas e Petroquímicas",
                    "Laboratórios de Controle de Qualidade",
                    "Certificação de Produtos Químicos e Alimentícios",
                    "Laboratórios de Ensino, Pesquisa e Desenvolvimento (P&D)",
                    "Empresas de Consultoria e Assistência Técnica",
                    "Comercialização de Produtos Químicos e Farmoquímicos",
                    "Estações de Tratamento de Águas e Efluentes (ETA/ETE)",
                    "Indústrias Farmacêuticas e de Cosméticos"
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
                    <p>Produção Industrial</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Área Tecnológica</span>
                    <p>Química</p>
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
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">CBOs Associadas (Principais)</span>
                    <div className="max-h-[140px] overflow-y-auto pr-1 mt-1 space-y-1 scrollbar-thin">
                      <p>• 3111-05 – Técnico Químico / Analista</p>
                      <p>• 3111-05 – Técnico Químico Industrial</p>
                      <p>• 3112-05 – Técnico em Petroquímica</p>
                      <p>• 3011-05 – Técnico de Laboratório Industrial</p>
                      <p>• 3011-15 – Técnico Químico de Petróleo</p>
                      <p>• 3011-10 – Análises Físico-Químicas</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-3 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                  <p>• Lei nº 2.800/1956 (Criação dos Conselhos Federal e Regionais de Química - CRQ/CFQ)</p>
                  <p>• Resolução Normativa CFQ nº 36/1974 (Dá atribuições aos profissionais da Química)</p>
                  <p>• Decreto nº 85.877/1981 (Normas de execução da Lei nº 2.800)</p>
                  <p>• Lei nº 5.524/1968 (Dispõe sobre a profissão de Técnico Industrial)</p>
                  <p>• Resolução CFT nº 85/2019 (Tabela de títulos no SINCETI)</p>
                  <p>• Decreto nº 90.922/1985 (Regulamenta a Lei do Técnico Industrial)</p>
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
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Operador de Processos Químicos Industriais</li>
                <li>• Auxiliar de Laboratório de Análises Químicas</li>
                <li>• Assistente de Análises em Processos Químicos</li>
                <li>• Assistente de Produção em Processos Químicos</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Especialização em Análises Espectrométricas</li>
                <li>• Especialização em Análises de Combustíveis</li>
                <li>• Especialização em Microbiologia Alimentar</li>
                <li>• Especialização em Biogás e Biometano</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Graduação</h4>
              <div className="max-h-[160px] overflow-y-auto pr-1 space-y-1 scrollbar-thin text-sm text-slate-600">
                <p>• CST em Processos Químicos / Polímeros</p>
                <p>• CST em Petróleo e Gás / Biocombustíveis</p>
                <p>• Bacharelado em Química / Química Industrial</p>
                <p>• Engenharia Química / Engenharia Bioquímica</p>
                <p>• Bacharelado em Bioquímica / Química Ambiental</p>
                <p>• Química de Alimentos / Química do Petróleo</p>
                <p>• Licenciatura em Química</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}