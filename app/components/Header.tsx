"use client"; // Indica que este componente roda no lado do cliente para usar o usePathname

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // Captura a rota atual (ex: "/" ou "/cursos")

  // Lista de links do menu
  const links = [
    { nome: "Home", rota: "/" },
    { nome: "Cursos", rota: "/cursos" },
    { nome: "Contato", rota: "/contato" },
    { nome: "Localização", rota: "/localizacao" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo CEEP */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image 
            src="/ceep-logo.png"
            alt="Logo CEEP Curitiba"
            width={48}
            height={48}
            className="object-contain"
          />
          <div>
            <span className="text-xl font-extrabold tracking-tight text-blue-900 block leading-none">CEEP</span>
            <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">Curitiba</span>
          </div>
        </Link>

        {/* Menu de Navegação Dinâmico */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            // Verifica se a rota atual é igual à rota do link
            const isActive = pathname === link.rota;

            return (
              <Link
                key={link.nome}
                href={link.rota}
                className={`text-sm font-semibold pb-1 transition-all duration-200 border-b-2 ${
                  isActive
                    ? "text-blue-600 border-blue-600" // Estilo ativo (azul e sublinhado)
                    : "text-slate-600 border-transparent hover:text-blue-600 hover:border-blue-600/50" // Estilo inativo
                }`}
              >
                {link.nome}
              </Link>
            );
          })}
        </nav>

        {/* Botão de Ação Rápida */}
        <div className="hidden sm:block">
          <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm font-bold transition-all">
            Área do Aluno
          </button>
        </div>

      </div>
    </header>
  );
}