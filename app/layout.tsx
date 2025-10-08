import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import { AccessibilityProvider } from '@/contexts/accessibility-context';
import { ThemeProvider } from '@/contexts/theme-context';
import { Suspense } from 'react';
import { Header } from '@/components/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sistema de Acessibilidade',
  description: 'Projeto com recursos de acessibilidade avançados',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider>
          <AccessibilityProvider>
            <Suspense fallback={null}>
              <Header />
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </Suspense>
          </AccessibilityProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
