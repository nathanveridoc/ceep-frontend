import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("teste")
  return (
    <div className="relative overflow-hidden">

      <section className="relative bg-gradient-to-b from-blue-50 via-white to-slate-50 py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Matrículas Abertas para 2027
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
              Construa seu futuro profissional no <span className="text-blue-600">CEEP</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Educação técnica pública de excelência em Curitiba. Prepare-se para o mercado de trabalho com professores qualificados e infraestrutura completa.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#pesquisa" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                Ver Pesquisa de Interesse
              </a>
              <Link href="/cursos" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-6 py-3.5 rounded-xl transition-all">Conhecer Cursos </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl rotate-3 scale-105 opacity-10 blur-lg"></div>
            <div className="relative bg-white border border-slate-100 rounded-3xl p-4 shadow-2xl">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/ceep-escola.jpg"
                  alt="Fachada do CEEP Curitiba"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-white font-bold text-lg">CEEP Curitiba</p>
                  <p className="text-blue-200 text-xs">Sua jornada profissional começa aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pesquisa" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-900/20 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl"></div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-md">
              Atenção Estudantes
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              PESQUISA DE INTERESSE – ENSINO MÉDIO COM CURSO PROFISSIONALIZANTE INTEGRADO
            </h2>
            <p className="text-blue-100 text-lg font-medium">
              Período vespertino para primeiros anos — 2027
            </p>
            <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed">
              Caso você queira cursar o Ensino Médio e deseja se especializar com um curso técnico gratuito no período da tarde(nos primeiros anos), responda ao nosso formulário de interesse para nos ajudar a planejar as turmas.
            </p>
            <div className="pt-4">
              <Link
                href="/inscricao"
                className="inline-flex items-center gap-2 bg-white hover:bg-amber-400 text-blue-900 hover:text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                Responder Pesquisa de Interesse
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                80 Anos de Tradição e Excelência
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Localizado no coração do bairro Boqueirão, o CEEP Curitiba é uma instituição de referência no ensino técnico, dedicada a preparar profissionais qualificados para os desafios do mercado de trabalho.
                </p>
                <p>
                  Com oito décadas de história, nossa trajetória é marcada pelo compromisso com a educação pública de qualidade, evoluindo constantemente para atender às demandas tecnológicas e sociais do Paraná.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-200 ml-3 space-y-10">
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-lg font-bold text-slate-900">1941: Fundação</h3>
                <p className="text-slate-600 text-sm">
                  Início de nossa jornada como Instituto Técnico de Agronomia, Veterinária e Química do Paraná.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <h3 className="text-lg font-bold text-slate-900">1944: Evolução</h3>
                <p className="text-slate-600 text-sm">
                  Passamos a nos chamar Instituto Técnico de Química Industrial, consolidando nossa vocação técnica.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-400"></div>
                <h3 className="text-lg font-bold text-slate-900">Instituto Politécnico</h3>
                <p className="text-slate-600 text-sm">
                  Antes da nomenclatura atual, fomos conhecidos como Instituto Politécnico do Paraná, adaptando-nos às novas diretrizes educacionais.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Por que estudar no CEEP?</h2>
            <p className="text-slate-600">Oferecemos uma estrutura completa para garantir o seu aprendizado prático.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A5.905 5.905 0 0 1 8 3.443m12 6.704a50.57 50.57 0 0 1 2.658-.813A5.905 5.905 0 0 0 16 3.443m-8 0a5.905 5.905 0 0 0-6 5.659v3.185A4.89 4.89 0 0 0 5.093 16.5m13.813-13.057a5.905 5.905 0 0 1 6 5.659v3.185a4.89 4.89 0 0 1-3.093 4.65M12 3v17.904" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cursos Gratuitos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ensino técnico de alta qualidade totalmente gratuito, mantido pelo Governo do Estado do Paraná.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.45.258-.717.258H3.717c-.266 0-.523-.093-.717-.258m16.5 0a2.18 2.18 0 0 1-.75 1.661v3.57a3.724 3.724 0 0 1-2.678 3.585m-11.484-11.24a48.11 48.11 0 0 0-3.413.387m4.5 8.006c-.194.165-.45.258-.717.258H3.717c-.266 0-.523-.093-.717-.258m11.484 11.24a3.724 3.724 0 0 0 2.678-3.585V14.15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Foco no Mercado</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Parcerias com empresas locais para facilitar o encaminhamento de alunos para vagas de estágio e emprego.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Laboratórios Modernos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aulas práticas em ambientes equipados com tecnologia de ponta para simular o dia a dia da profissão.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
