import React from 'react';

export default function DetalheCursoBiotecnologia() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Biotecnologia
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-biotecnologia.pdf" 
              download="Plano_de_Curso_Biotecnologia.pdf"
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
              Baixar Plano de Curso em Biotecnologia (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-biotecnologia.pdf" 
              download="Matriz-Curricular-Biotecnologia.pdf"
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
              Baixar Matriz Curricular de Biotecnologia (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Biotecnologia será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Executar atividades laboratoriais de biotecnologia e biociências.",
                    "Controlar e monitorar processos industriais e laboratoriais.",
                    "Preparar materiais, meios de cultura, soluções e reagentes.",
                    "Analisar substâncias e materiais biológicos.",
                    "Cultivar in vivo e in vitro microrganismos e células.",
                    "Auxiliar em pesquisas de melhoramento genético.",
                    "Realizar o preparo de amostras de tecidos.",
                    "Extrair, replicar e quantificar biomoléculas.",
                    "Produção de imunobiológicos, vacinas e kits de diagnóstico.",
                    "Operar a criação e manejo de animais de experimentação.",
                    "Controlar a qualidade de matérias-primas e insumos."
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
                <p>Para atuação como Técnico em Biotecnologia, são fundamentais:</p>
                <p className="mt-4">Conhecimentos e saberes relacionados aos processos de planejamento e operação das atribuições da área, de modo a assegurar a saúde e a segurança dos trabalhadores e dos futuros usuários e operadores de empresas em processos de transformação biotecnológica.</p>
                <p className="mt-4">Conhecimentos e saberes relacionados à sustentabilidade do processo produtivo, às normas e relatórios técnicos, à legislação da área, às novas tecnologias relacionadas à indústria 4.0, à liderança de equipes, à solução de problemas técnicos e à gestão de conflitos.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {["Empresas", "Indústrias", "Agroindústrias", "Instituições de Pesquisa", "Laboratórios de Controle de Qualidade", "Bancos de Materiais Biológicos", "Indústrias Alimentícias/Cosméticos", "Estações de Tratamento de Água", "Empreendimento Próprio"].map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* COLUNA DIREITA - Informações Técnicas */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:mt-14">
              <div className="text-xs text-slate-500 space-y-4">
                <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Pré-requisitos de Ingresso</span>
                    <ul className="list-disc pl-4 space-y-1 mt-1">
                      <li><strong>Subsequente:</strong> Ensino Médio completo.</li>
                      <li><strong>Integrado:</strong> Ensino Fundamental completo.</li>
                      <li><strong>PROEJA:</strong> Ensino Fundamental completo.</li>
                    </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-3">
                  <p>• Decreto nº 90.922/1985 (Regulamenta Lei nº 5.524)</p>
                  <p>• Lei nº 2800/1956 (Conselhos de Química)</p>
                  <p>• Decreto nº 85877/1981</p>
                  <p>• Resolução CFT n 85/2019</p>
                  <p>• Lei nº 5.524/1968 (Técnico Industrial)</p>
               </div>
            </div>
          </div>
        </div>

        {/* ITINERÁRIOS FORMATIVOS (Full Width no final) */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Itinerários Formativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3">Qualificação</h4>
              <p className="text-sm text-slate-600">Auxiliar Técnico em Biotecnologia</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Biogás e Biometano</li>
                <li>Biotecnologia Vegetal/Animal</li>
                <li>Biossegurança</li>
                <li>Análises Laboratoriais</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3">Graduação</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Tecnologia em Saneamento</li>
                <li>Ciências Biológicas</li>
                <li>Engenharia Química/Alimentos</li>
                <li>Engenharia de Bioprocessos</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}