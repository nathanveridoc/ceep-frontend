"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu no celular

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

        {/* Menu de Navegação - DESKTOP (Invisível no celular) */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.rota;
            return (
              <Link
                key={link.nome}
                href={link.rota}
                className={`text-sm font-semibold pb-1 transition-all duration-200 border-b-2 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "text-slate-600 border-transparent hover:text-blue-600 hover:border-blue-600/50"
                }`}
              >
                {link.nome}
              </Link>
            );
          })}
        </nav>

        {/* Botão do Menu Hamburguer - APENAS CELULAR */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-slate-600 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                // Ícone de "X" quando o menu está aberto
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Ícone de "Três Listras" quando o menu está fechado
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Menu de Navegação - APENAS CELULAR (Aparece com transição suave ao clicar) */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-slate-100 shadow-inner">
          {links.map((link) => {
            const isActive = pathname === link.rota;
            return (
              <Link
                key={link.nome}
                href={link.rota}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um link
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {link.nome}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}