// src/test/components/atoms/Text.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {
    
    it('debe renderizar un párrafo por defecto', () => {
        render(<Text>Texto de prueba</Text>);
        const text = screen.getByText(/texto de prueba/i);
        expect(text).toBeTruthy();
        expect(text.tagName).toBe('P');
    });

    it('debe renderizar como h1', () => {
        render(<Text variant="h1">Título</Text>);
        const heading = screen.getByText(/título/i);
        expect(heading.tagName).toBe('H1');
    });

    it('debe renderizar como h2', () => {
        render(<Text variant="h2">Subtítulo</Text>);
        const heading = screen.getByText(/subtítulo/i);
        expect(heading.tagName).toBe('H2');
    });

    it('debe renderizar como h3', () => {
        render(<Text variant="h3">Sección</Text>);
        const heading = screen.getByText(/sección/i);
        expect(heading.tagName).toBe('H3');
    });

    it('debe renderizar como span', () => {
        render(<Text variant="span">Inline</Text>);
        const span = screen.getByText(/inline/i);
        expect(span.tagName).toBe('SPAN');
    });

    it('debe renderizar como div', () => {
        render(<Text variant="div">Contenedor</Text>);
        const div = screen.getByText(/contenedor/i);
        expect(div.tagName).toBe('DIV');
    });

    it('debe aplicar className', () => {
        render(<Text className="titulo-principal">Texto</Text>);
        const element = screen.getByText(/texto/i);
        expect(element.className).toContain('titulo-principal');
    });

    it('debe renderizar números', () => {
        render(<Text>{123}</Text>);
        const text = screen.getByText('123');
        expect(text).toBeTruthy();
    });

    it('debe renderizar múltiples clases', () => {
        render(<Text className="clase1 clase2 clase3">Multi</Text>);
        const element = screen.getByText(/multi/i);
        expect(element.className).toContain('clase1');
        expect(element.className).toContain('clase2');
        expect(element.className).toContain('clase3');
    });
});