'use client';

import { useAccessibility } from '@/contexts/accessibility-context';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import {
  Type,
  Minus,
  Plus,
  Contrast,
  RotateCcw,
  Accessibility,
  PersonStanding,
} from 'lucide-react';

export function AccessibilityToolbar() {
  const {
    fontSize,
    contrastMode,
    increaseFontSize,
    decreaseFontSize,
    toggleContrast,
    resetAccessibility,
  } = useAccessibility();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative bg-transparent"
          aria-label="Opções de acessibilidade"
        >
          <PersonStanding className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Accessibility className="h-4 w-4" />
              Acessibilidade
            </h3>
          </div>

          <Separator />

          {/* Controle de Tamanho de Fonte */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <Type className="h-4 w-4" />
                Tamanho da Fonte
              </label>
              <span className="text-xs text-muted-foreground capitalize">
                {fontSize === 'normal' && 'Normal'}
                {fontSize === 'medium' && 'Médio'}
                {fontSize === 'large' && 'Grande'}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={decreaseFontSize}
                disabled={fontSize === 'normal'}
                className="flex-1 bg-transparent"
                aria-label="Diminuir fonte"
              >
                <Minus className="h-4 w-4 mr-1" />
                Diminuir
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={increaseFontSize}
                disabled={fontSize === 'large'}
                className="flex-1 bg-transparent"
                aria-label="Aumentar fonte"
              >
                <Plus className="h-4 w-4 mr-1" />
                Aumentar
              </Button>
            </div>
          </div>

          <Separator />

          {/* Controle de Contraste */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <Contrast className="h-4 w-4" />
                Alto Contraste
              </label>
              <span className="text-xs text-muted-foreground">
                {contrastMode === 'high' ? 'Ativado' : 'Desativado'}
              </span>
            </div>
            <Button
              variant={contrastMode === 'high' ? 'default' : 'outline'}
              size="sm"
              onClick={toggleContrast}
              className="w-full"
              aria-label="Alternar alto contraste"
            >
              <Contrast className="h-4 w-4 mr-2" />
              {contrastMode === 'high'
                ? 'Desativar Contraste'
                : 'Ativar Contraste'}
            </Button>
          </div>

          <Separator />

          {/* Botão de Reset */}
          <Button
            variant="ghost"
            size="sm"
            onClick={resetAccessibility}
            className="w-full"
            aria-label="Restaurar configurações padrão"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Restaurar Padrão
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
