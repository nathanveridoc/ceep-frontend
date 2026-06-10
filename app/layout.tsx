import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Importa o novo Header dinâmico

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CEEP Curitiba - Centro Estadual de Educação Profissional",
  description: "Ensino técnico público e de qualidade em Curitiba.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        
        {/* HEADER DINÂMICO (Importado do componente cliente) */}
        <Header />

        {/* CONTEÚDO DA PÁGINA */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER / RODAPÉ */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-3">CEEP Curitiba</h3>
                <p className="text-sm leading-relaxed">
                  Centro Estadual de Educação Profissional de Curitiba. Formando profissionais capacitados para o mercado de trabalho desde a sua fundação.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Links Úteis</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.educacao.pr.gov.br/servicos/Educacao/Ensino-Fundamental/Acessar-Escola-Digital-pAoppvoz" className="hover:text-white transition-colors">Secretaria Digital</a></li>
                  <li><a href="https://www.educacao.pr.gov.br/sites/default/arquivos_restritos/files/documento/2025-11/calendario_escolar2026.pdf" className="hover:text-white transition-colors">Calendário Escolar</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Contato</h3>
                <p className="text-sm">Rua Frederico Maurer, 3015 - Boqueirão, Curitiba - PR, 81670-020</p>
                <p className="text-sm mt-1">Telefone: (41) 3284-6820</p>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <p>© 2026 CEEP Curitiba. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}