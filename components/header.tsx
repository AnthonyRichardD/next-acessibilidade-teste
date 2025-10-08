'use client';

import { useState } from 'react';
import { AccessibilityToolbar } from './accessibility-toolbar';
import { ThemeToggleButton } from './theme-toggle-button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 items-center justify-between">
        {/* Logo e Nome */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700">
            {/* <span className="text-2xl font-bold text-white"></span> */}
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-tight text-primary-green">
              Labmaker Inclusivo
            </h1>
            <p className="text-xs text-muted-foreground">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </Link>

        {/* Navegação Desktop (Escondida em mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Início
          </Link>
          <Link
            href="/projetos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projetos
          </Link>
        </nav>

        {/* Ferramentas e Botão Hambúrguer */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <AccessibilityToolbar />
            <ThemeToggleButton />
          </div>

          {/* Botão Hambúrguer (Visível apenas em mobile) */}
          <button
            className="md:hidden rounded-md p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Lateral Mobile (Painel Deslizante) */}
      <div
        className={`fixed top-20 right-0 h-fit w-[80%] border border-t-0 max-w-sm transform bg-background shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6 p-8">
          <Link
            href="/"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/projetos"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="/contato"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>

          <div className="border-t pt-6">
            <div className="flex items-center justify-center gap-4">
              <AccessibilityToolbar />
              <ThemeToggleButton />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
