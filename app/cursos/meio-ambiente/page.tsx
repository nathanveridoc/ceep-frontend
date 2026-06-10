import React from 'react';

export default function DetalheCursoMeioAmbiente() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DO CURSO */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">Catálogo de Cursos</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curso Técnico em Meio Ambiente
          </h1>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/plano-de-curso-meio-ambiente.pdf" 
              download="Plano_de_Curso_Meio-Ambiente.pdf"
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
              Baixar Plano de Curso em Meio Ambiente (PDF)
            </a>
          </div>
          <div className="flex-shrink-0 mt-2">
            <a 
              href="/matriz-curricular-meio-ambiente.pdf" 
              download="Matriz_Curricular_Meio_Ambiente.pdf"
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
              Baixar Matriz Curricular de Meio Ambiente (PDF)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA ESQUERDA - Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Objetivos e Habilidades</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-6">O técnico em Meio Ambiente será habilitado para:</p>
                <div className="max-h-[520px] overflow-y-auto pr-2 scrollbar-thin">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                    {[
                      "Coletar, armazenar e interpretar dados, informações e documentações ambientais oficiais.",
                      "Auxiliar na elaboração, análise de projetos, relatórios e estudos de impacto ambiental.",
                      "Propor medidas práticas para a minimização de impactos e recuperação de áreas degradadas.",
                      "Executar, auditar e monitorar sistemas de gestão ambiental públicos e privados.",
                      "Organizar programas de educação ambiental baseados no monitoramento e prevenção de ações antrópicas.",
                      "Gerenciar processos de redução, reuso e reciclagem de resíduos sólidos e recursos industriais.",
                      "Operar e avaliar sistemas de tratamento de poluentes, efluentes e esgotamento sanitário.",
                      "Avaliar indicadores de qualidade do ar atmosférico e coordenar sistemas de coleta seletiva.",
                      "Conhecer e utilizar sistemas de informação geográfica (SIG) voltados ao geoprocessamento.",
                      "Identificar e intervir em problemas de saúde coletiva relacionados a riscos ambientais no território.",
                      "Desenvolver tecnologias sociais ambientais e integrar a saúde do trabalhador à saúde ambiental."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Fundamentos da Profissão</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-slate-600 leading-relaxed">
                <p>Para atuação como Técnico em Meio Ambiente, são fundamentais:</p>
                <p className="mt-4">Domínio das políticas públicas ambientais e compreensão clara da atuação profissional frente às diretrizes, princípios e estrutura do Sistema Nacional do Meio Ambiente (SISNAMA) e do Sistema Único de Saúde (SUS).</p>
                <p className="mt-4">Visão integrada e abrangente das dinâmicas ecológicas (água, ar, solo, fauna e flora), associada a saberes de sustentabilidade, territorialização e monitoramento prevencionista.</p>
                <p className="mt-4">Competências sólidas de organização, responsabilidade civil, resolução de problemas complexos, liderança e gestão de conflitos em equipes colaborativas, atuando com estrita ética profissional e compromisso com a educação continuada.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Campo de Atuação</h2>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-600 mb-4">Locais e Ambientes de trabalho:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Empresas de Licenciamento Ambiental",
                    "Estações de Tratamento de Água, Esgoto e Efluentes",
                    "Aterros Sanitários e Usinas de Reciclagem",
                    "Autarquias, Ministérios e Órgãos Públicos",
                    "Indústrias e Unidades de Produção Geral",
                    "Unidades de Conservação Ambiental e Manejo Florestal",
                    "Organizações Não Governamentais (ONGs)",
                    "Cooperativas e Associações de Coleta Seletiva",
                    "Institutos de Pesquisa e Extensão Rural",
                    "Consultoria Autônoma e Empreendimento Próprio"
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
                    <p>Proteção e Reabilitação de Ecossistemas</p>
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
                    <span className="font-bold block text-slate-700 uppercase tracking-wider mb-1">CBO Associada</span>
                    <p>3115-05 – Técnico em Controle de Meio Ambiente</p>
                  </div>
               </div>
            </div>

            {/* Card de Legislação Profissional */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="font-bold text-slate-900 mb-4">Legislação Profissional</h3>
               <div className="text-xs text-slate-500 space-y-3">
                  <p>• Resolução CFT nº 85/2019 (Tabela de Títulos de Técnicos Industriais)</p>
                  <p>• Lei nº 5.524/1968 (Dispõe sobre o Exercício da Profissão)</p>
                  <p>• Decreto nº 90.922/1985 (Regulamentação Geral da Categoria)</p>
                  <p>• Decreto nº 4.560/2002 (Altera e atualiza o Decreto nº 90.922/85)</p>
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
              <ul className="text-sm text-slate-600 space-y-1.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                <li>• Agente Ambiental / Socioambiental</li>
                <li>• Operador de Estações de Tratamento (ETA/ETE)</li>
                <li>• Agente de Gestão de Resíduos Sólidos</li>
                <li>• Brigadista de Combate a Incêndios Florestais</li>
                <li>• Agente Local de Vigilância em Saúde e Endemias</li>
                <li>• Operador de Aterro Sanitário</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Especialização Técnica</h4>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>• Especialização em Gerenciamento Ambiental</li>
                <li>• Especialização em Geoprocessamento Avançado</li>
                <li>• Especialização em Educação Ambiental</li>
                <li>• Especialização Técnica em Reciclagem e Economia Circular</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Verticalização (Graduação)</h4>
              <ul className="text-sm text-slate-600 space-y-1.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                <li>• Engenharia Ambiental e Sanitária / Engenharia Sanitária</li>
                <li>• CST em Gestão Ambiental / Saneamento Ambiental</li>
                <li>• Bacharelado em Ciências Ambientais / Geografia</li>
                <li>• Engenharia Florestal / Engenharia Agronômica</li>
                <li>• Bacharelado e Licenciatura em Ciências Biológicas</li>
                <li>• CST em Gestão de Resíduos Sólidos</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}