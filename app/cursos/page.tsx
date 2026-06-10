"use client"; // Permite interatividade (filtros) nesta página

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Lista de todos os cursos baseada nas suas imagens
const listaCursos = [
  {
    id: "biotecnologia",
    nome: "Técnico em Biotecnologia",
    categoria: "Saúde & Química",
    imagem: "/curso-biotecnologia.jpg",
    descricao: "Aplicação de organismos vivos e sistemas biológicos para criar tecnologias e produtos inovadores."
  },
  {
    id: "desenvolvimento-de-sistemas",
    nome: "Técnico em Desenvolvimento de Sistemas",
    categoria: "Tecnologia",
    imagem: "/curso-desenvolvimento-de-sistemas.jpg",
    descricao: "Desenvolvimento de softwares, aplicativos, sistemas web e banco de dados utilizando linguagens modernas."
  },
  {
    id: "edificacoes",
    nome: "Técnico em Edificações",
    categoria: "Infraestrutura",
    imagem: "/curso-edificacoes.jpg",
    descricao: "Planejamento, execução e manutenção de obras civis, seguindo normas técnicas e de segurança."
  },
  {
    id: "eletromecanica",
    nome: "Técnico em Eletromecânica",
    categoria: "Indústria",
    imagem: "/curso-eletromecanica.jpg",
    descricao: "Integração de processos mecânicos e elétricos na montagem e manutenção de máquinas industriais."
  },
  {
    id: "eletronica",
    nome: "Técnico em Eletrônica",
    categoria: "Indústria",
    imagem: "/curso-eletronica.jpg",
    descricao: "Desenvolvimento, instalação e manutenção de circuitos eletrônicos e sistemas automatizados."
  },
  {
    id: "farmacia",
    nome: "Técnico em Farmácia",
    categoria: "Saúde & Química",
    imagem: "/curso-farmacia.jpg",
    descricao: "Atuação na manipulação, controle de qualidade e dispensação de medicamentos e cosméticos."
  },
  {
    id: "manutencao-automotiva",
    nome: "Técnico em Manutenção Automotiva",
    categoria: "Indústria",
    imagem: "/curso-manutencao-automotiva.jpg",
    descricao: "Diagnóstico, reparação e manutenção preventiva de sistemas mecânicos e eletroeletrônicos de veículos."
  },
  {
    id: "mecanica",
    nome: "Técnico em Mecânica",
    categoria: "Indústria",
    imagem: "/curso-mecanica.jpg",
    descricao: "Elaboração de projetos, controle de processos de fabricação e manutenção de equipamentos mecânicos."
  },
  {
    id: "meio-ambiente",
    nome: "Técnico em Meio Ambiente",
    categoria: "Recursos Naturais",
    imagem: "/curso-meio-ambiente.jpg",
    descricao: "Coleta de dados, execução de projetos de preservação ambiental e controle de poluição."
  },
  {
    id: "programacao-de-jogos-digitais",
    nome: "Técnico em Programação de Jogos Digitais",
    categoria: "Tecnologia",
    imagem: "/curso-jogos-digitais.jpg",
    descricao: "Criação, programação e publicação de jogos digitais para computadores, consoles e dispositivos móveis."
  },
  {
    id: "quimica",
    nome: "Técnico em Química",
    categoria: "Saúde & Química",
    imagem: "/curso-quimica.jpg",
    descricao: "Operação de processos químicos, análises laboratoriais e controle de qualidade de matérias-primas."
  }
];

// Categorias para o filtro
const categorias = ["Todos", "Tecnologia", "Indústria", "Saúde & Química", "Infraestrutura", "Recursos Naturais"];

export default function Cursos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  // Filtra os cursos com base na categoria selecionada
  const cursosFiltrados = categoriaAtiva === "Todos"
    ? listaCursos
    : listaCursos.filter(curso => curso.categoria === categoriaAtiva);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Página */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Formação Profissional</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Catálogo de Cursos
          </h1>
          <p className="text-slate-600 text-lg">
            Explore nossos cursos técnicos gratuitos e encontre a área ideal para impulsionar a sua carreira.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                categoriaAtiva === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursosFiltrados.map((curso) => (
            <div 
              key={curso.id} 
              className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Container da Imagem */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={curso.imagem}
                  alt={curso.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge de Categoria sobre a imagem */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {curso.categoria}
                </span>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {curso.nome}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {curso.descricao}
                  </p>
                </div>

                {/* Link para a página de detalhes (que faremos depois) */}
                <div className="pt-2">
                  <Link 
                    href={`/cursos/${curso.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm group/link"
                  >
                    Ver detalhes do curso
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2.5} 
                      stroke="currentColor" 
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caso nenhum curso corresponda ao filtro (segurança) */}
        {cursosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">Nenhum curso encontrado nesta categoria.</p>
          </div>
        )}

      </div>
    </div>
  );
}