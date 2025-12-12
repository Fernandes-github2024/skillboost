"use client";
import Link from "next/link";
// ✨ Certifique-se que o seu arquivo menuLinks.js foi atualizado conforme o Passo 1 acima!
import { menuLinks } from "../../../utils/menuLinks";
import { useState, useEffect } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [show, setShow] = useState(false);

  // Função para alternar o menu
  const handleToggle = () => setShow(!show);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setShow(false);

  // (Opcional) Bloquear o scroll da página quando o menu estiver aberto
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <nav className="w-full sticky top-0 left-0 z-50 bg-[#fff] lg:shadow-md border-b border-gray-100 lg:border-none">
      
      {/* Container Principal */}
      <div className="relative flex items-center justify-between p-4 sm:p-6 lg:p-8 bg-white z-50">
        
        {/* Logo */}
        <div>
          <Link href="/" onClick={closeMenu}>
            <h1 className="text-xl lg:text-4xl font-extrabold text-[var(--primary)]">
              Skill<span className="text-[var(--secondary)]">Boost</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Menu (Links) - SEM ÍCONES AQUI */}
        <ul className="hidden lg:flex gap-8">
          {menuLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="tracking-wide lg:text-lg hover:text-[var(--secondary)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Menu (Buttons) */}
        <div className="hidden lg:flex gap-3">
          {/* Botão Entrar: Estilo "Ghost" (Contorno) para ação secundária */}
          <button className="tracking-wide lg:text-lg text-[var(--primary)] py-3 px-6 border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white rounded-md cursor-pointer transition-all duration-300">
            Entrar
          </button>
          {/* Botão Inscrever-se: Sólido para ação primária */}
          <button className="tracking-wide lg:text-lg text-white py-3 px-6 bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 shadow-md hover:shadow-lg rounded-md cursor-pointer transition-all duration-300">
            Inscrever-se
          </button>
        </div>

        {/* Button Mobile Toggle */}
        <button 
          onClick={handleToggle} 
          className="lg:hidden text-2xl text-[var(--primary)] cursor-pointer p-1 transition-transform active:scale-90"
          aria-label="Toggle Menu"
        >
          {show ? <RiCloseLine /> : <RiMenu4Line />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out
          ${show ? "opacity-100 visible top-[60px]" : "opacity-0 invisible top-[50px] pointer-events-none"}
        `}
        style={{ height: "calc(100vh - 60px)" }} 
      >
        <div className="flex flex-col h-full overflow-y-auto pb-10">
          
          {/* Links de Navegação MOBILE COM ÍCONES */}
          <ul className="flex flex-col p-6 gap-2">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href} 
                  onClick={closeMenu}
                  // Adicionado 'flex items-center gap-4' para alinhar ícone e texto
                  className="flex items-center gap-4 w-full py-4 text-lg font-medium text-gray-700 border-b border-gray-100 hover:text-[var(--secondary)] hover:pl-2 transition-all group"
                >
                   {/*Renderização condicional do ícone */}
                   {link.icon && (
                    <span className="text-2xl text-gray-400 group-hover:text-[var(--secondary)] transition-colors">
                      <link.icon />
                    </span>
                  )}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Área de Ações (Botões) */}
          <div className="mt-auto px-6 py-8 flex flex-col gap-4 bg-gray-50 border-t border-gray-100">
            
            {/* 1. Ação Principal: Inscrever-se */}
            <button className="w-full py-4 text-base font-semibold text-white bg-[var(--secondary)] rounded-lg shadow-md hover:opacity-90 active:scale-[0.98] transition-all">
              Inscrever-se
            </button>

            {/* 2. Ação Secundária: Entrar */}
            <button className="w-full py-4 text-base font-semibold text-[var(--primary)] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 active:scale-[0.98] transition-all">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}