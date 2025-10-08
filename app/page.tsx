'use client';

import VLibras from 'vlibras-nextjs';
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <VLibras forceOnload />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">
              Sistema de Acessibilidade
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este projeto demonstra um sistema completo de acessibilidade com
              controle de tamanho de fonte e modo de alto contraste.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Recursos Disponíveis</h2>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  Ajuste de Tamanho de Fonte:
                </strong>{' '}
                Aumente ou diminua o tamanho do texto em 3 níveis (Normal,
                Médio, Grande)
              </li>
              <li>
                <strong className="text-foreground">Alto Contraste:</strong>{' '}
                Ative o modo de alto contraste para melhor legibilidade
              </li>
              <li>
                <strong className="text-foreground">
                  Persistência de Preferências:
                </strong>{' '}
                Suas configurações são salvas automaticamente
              </li>
              <li>
                <strong className="text-foreground">Restauração Rápida:</strong>{' '}
                Volte às configurações padrão com um clique
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Como Usar</h2>
            <p className="text-muted-foreground leading-relaxed">
              Clique no ícone de acessibilidade no canto superior direito para
              abrir o painel de controle. A partir daí, você pode ajustar o
              tamanho da fonte e ativar o modo de alto contraste conforme suas
              necessidades.
            </p>
          </section>

          <section className="rounded-lg border bg-card p-6 space-y-3">
            <h3 className="text-xl font-semibold">Exemplo de Conteúdo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Este é um exemplo de como o conteúdo se adapta às configurações de
              acessibilidade. Experimente ajustar as configurações e observe
              como o texto e o contraste mudam em tempo real.
            </p>
            <p className="text-sm text-muted-foreground">
              As configurações são aplicadas globalmente em toda a aplicação e
              persistem entre as sessões do navegador.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
