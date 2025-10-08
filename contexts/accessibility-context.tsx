'use client';

import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

type FontSize = 'normal' | 'medium' | 'large';
type ContrastMode = 'normal' | 'high';

interface AccessibilityContextType {
  fontSize: FontSize;
  contrastMode: ContrastMode;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleContrast: () => void;
  resetAccessibility: () => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [contrastMode, setContrastMode] = useState<ContrastMode>('normal');

  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize') as FontSize;
    const savedContrast = localStorage.getItem('contrastMode') as ContrastMode;

    if (savedFontSize) setFontSize(savedFontSize);
    if (savedContrast) setContrastMode(savedContrast);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('font-normal', 'font-medium', 'font-large');
    root.classList.remove('contrast-normal', 'contrast-high');

    root.classList.add(`font-${fontSize}`);
    root.classList.add(`contrast-${contrastMode}`);

    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('contrastMode', contrastMode);
  }, [fontSize, contrastMode]);

  const increaseFontSize = () => {
    setFontSize((current) => {
      if (current === 'normal') return 'medium';
      if (current === 'medium') return 'large';

      return 'large';
    });
  };

  const decreaseFontSize = () => {
    setFontSize((current) => {
      if (current === 'large') return 'medium';
      if (current === 'medium') return 'normal';
      return 'normal';
    });
  };

  const toggleContrast = () => {
    setContrastMode((current) => (current === 'normal' ? 'high' : 'normal'));
  };

  const resetAccessibility = () => {
    setFontSize('normal');
    setContrastMode('normal');
  };

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        contrastMode,
        increaseFontSize,
        decreaseFontSize,
        toggleContrast,
        resetAccessibility,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider',
    );
  }
  return context;
}
