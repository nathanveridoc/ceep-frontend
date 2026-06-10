import React from 'react';

export default function DetalheCursoFarmacia() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Farmácia
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-farmacia.pdf" 
              download="Plano_de_Curso_Farmácia.pdf"
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
              Baixar Plano de Curso em Farmácia (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-farmacia.pdf" 
              download="Matriz_Curricular_Farmácia.pdf"
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
              Baixar Matriz Curricular de Farmácia (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Farmácia será habilitado para:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  {[
                    "Atender prescrições de medicamentos e cosméticos sob supervisão do farmacêutico.",
                    "Interpretar receitas, separando, organizando e fornecendo o produto solicitado.",
                    "Auxiliar em processos administrativos e na logística de indústrias farmacêuticas e correlatos.",
                    "Executar rotinas de compra, armazenamento e recebimento de produtos do setor.",
                    "Identificar e classificar diferentes formas e produtos farmacêuticos.",
                    "Participar da rotina de testes em laboratórios de pesquisa de institutos e universidades.",
                    "Realizar o controle, organização e a manutenção preventiva de estoques de matérias-primas.",
                    "Executar operações farmacotécnicas na manipulação de fórmulas alopáticas, fitoterápicas e homeopáticas.",
                    "Realizar testes laboratoriais de controle de qualidade e segurança assistencial."
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
                <p>Para atuação como Técnico em Farmácia, são fundamentais:</p>
                <p className="mt-4">Domínio e entendimento das políticas públicas de saúde, compreendendo a fundo a organização, os princípios fundamentais e as diretrizes operacionais do Sistema Único de Saúde (SUS), sempre pautados em uma postura humanizada, acolhedora e ética.</p>
                <p className="mt-4">Conhecimentos técnicos associados aos processos de produção industrial, biossegurança, sustentabilidade e gestão logística de insumos de saúde.</p>
                <p className="mt-4">Desenvolvimento de competências para resolução de situações-problema, comunicação clara com pacientes, cooperação em equipes interdisciplinares, uso de tecnologias da informação, inteligência emocional na gestão de conflitos e proatividade em programas de educação continuada.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Drogarias e Drugstores",
                    "Farmácias de Manipulação",
                    "Farmácias Hospitalares e Homeopáticas",
                    "Unidades Básicas de Saúde (UBS)",
                    "Indústrias Farmacêuticas e Químico-farmacêuticas",
                    "Indústrias de Cosméticos",
                    "Distribuidoras de Medicamentos e Insumos",
                    "Laboratórios de Pesquisa Acadêmica e Institucional",
                    "Unidades de Dispensação, Coleta e Análises Clínicas do SUS"
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
                    <p>Ambiente e Saúde</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Área Tecnológica</span>
                    <p>Gestão e Promoção da Saúde e Bem-Estar</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">Pré-requisitos de Ingresso</span>
                    <ul className="list-disc pl-4 space-y-1 mt-1">
                      <li><strong>Subsequente:</strong> Ensino Médio completo.</li>
                      <li><strong>Integrado:</strong> Ensino Fundamental completo.</li>
                      <li><strong>PROEJA:</strong> Ensino Fundamental completo.</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">CBOs Associadas</span>
                    <ul className="list-disc pl-4 space-y-0.5 mt-1">
                      <li>3251-15 – Técnico em Farmácia</li>
                      <li>3251-05 – Auxiliar Técnico em Laboratório</li>
                      <li>3251-10 – Técnico em Laboratório de Farmácia</li>
                    </ul>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-4 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin">
                  <div>
                    <strong className="text-slate-700 block">• Lei nº 3.820/1960:</strong>
                    <p className="pl-3 mt-0.5">Criação dos Conselhos Federal e Regionais de Farmácia (CFF/CRF), regulamentando a fiscalização profissional.</p>
                  </div>
                  <div>
                    <strong className="text-slate-700 block">• Lei nº 13.021/2014:</strong>
                    <p className="pl-3 mt-0.5">Define a farmácia como estabelecimento de saúde e reitera a necessidade de supervisão do farmacêutico.</p>
                  </div>
                  <div>
                    <strong className="text-slate-700 block">• Resolução CFF nº 681/2021:</strong>
                    <p className="pl-3 mt-0.5">Normatiza as atribuições técnicas do profissional em manipulação, dispensação e estoques.</p>
                  </div>
                  <div>
                    <strong className="text-slate-700 block">• Resolução CFF nº 700/2021:</strong>
                    <p className="pl-3 mt-0.5">Detalha os parâmetros de supervisão direta e contínua do farmacêutico responsável.</p>
                  </div>
                  <div>
                    <strong className="text-slate-700 block">• Lei nº 5.991/1973:</strong>
                    <p className="pl-3 mt-0.5">Regula as diretrizes de controle sanitário sobre o comércio de drogas, insumos e correlatos.</p>
                  </div>
                  <div>
                    <strong className="text-slate-700 block">• Portaria MS nº 344/1998:</strong>
                    <p className="pl-3 mt-0.5">Estabelece os critérios rígidos para o manuseio e dispensação de medicamentos sob controle especial.</p>
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
                <li>• Auxiliar de Farmácia de Manipulação</li>
                <li>• Auxiliar de Farmácia sem Manipulação (Drogarias)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Controle da Qualidade e Segurança em Farmácia</li>
                <li>• Especialização em Farmácia Hospitalar</li>
                <li>• Especialização em Farmácia de Manipulação</li>
                <li>• Gestão de Drogarias e Drugstores</li>
                <li>• Especialização Técnica em Laboratório</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Verticalização (Graduação)</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 max-h-[240px] overflow-y-auto pr-1 scrollbar-thin">
                <li>• Bacharelado em Farmácia / Biomedicina</li>
                <li>• CST em Análises Clínicas e Toxicológicas</li>
                <li>• CST em Gestão Hospitalar / Processos Químicos</li>
                <li>• Bacharelado em Química / Ciências Biológicas</li>
                <li>• Bacharelado em Biotecnologia / Enfermagem</li>
                <li>• Bacharelado em Medicina / Odontologia / Psicologia / Nutrição</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}