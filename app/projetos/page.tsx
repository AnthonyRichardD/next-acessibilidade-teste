'use client';

import VLibras from 'vlibras-nextjs';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tag } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <VLibras forceOnload />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-balance">Projetos</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore nossa coleção de projetos maker com tutoriais passo a
              passo. Cada projeto inclui lista de materiais, instruções
              detalhadas e dicas para replicação.
            </p>
          </section>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              key={1}
              href={`/projetos/carrinho-bluetooth`}
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02] pt-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  {/* <img
                    src={'/placeholder.svg'}
                    alt="Carrinho Bluetooth"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  /> */}
                  <div className="h-full w-full object-cover transition-transform group-hover:scale-105 bg-gray-500"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Robôtica</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Carrinho Bluetooth
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Aprenda a construir um carrinho controlado por Bluetooth
                    usando Arduino e módulo HC-05
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span>{1} tags</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
