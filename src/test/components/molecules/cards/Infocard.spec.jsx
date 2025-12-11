// src/test/components/molecules/cards/InfoCard.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from '../../../../components/molecules/cards/InfoCard';

describe('InfoCard Component', () => {
    
    it('debe renderizar children', () => {
        render(
            <InfoCard>
                <p>Contenido de prueba</p>
            </InfoCard>
        );
        const content = screen.getByText(/contenido de prueba/i);
        expect(content).toBeTruthy();
    });

    it('debe renderizar el título cuando se proporciona', () => {
        render(
            <InfoCard title="Mi Título">
                <p>Contenido</p>
            </InfoCard>
        );
        const titulo = screen.getByText(/mi título/i);
        expect(titulo).toBeTruthy();
        expect(titulo.tagName).toBe('H1');
    });

    it('no debe renderizar título si no se proporciona', () => {
        const { container } = render(
            <InfoCard>
                <p>Solo contenido</p>
            </InfoCard>
        );
        const h1 = container.querySelector('h1');
        expect(h1).toBeFalsy();
    });

    it('debe renderizar múltiples children', () => {
        render(
            <InfoCard title="Tarjeta">
                <p>Párrafo 1</p>
                <p>Párrafo 2</p>
                <span>Texto adicional</span>
            </InfoCard>
        );
        
        expect(screen.getByText(/párrafo 1/i)).toBeTruthy();
        expect(screen.getByText(/párrafo 2/i)).toBeTruthy();
        expect(screen.getByText(/texto adicional/i)).toBeTruthy();
    });

    it('debe tener la clase info-card', () => {
        const { container } = render(
            <InfoCard>
                <p>Test</p>
            </InfoCard>
        );
        const card = container.querySelector('.info-card');
        expect(card).toBeTruthy();
    });

    it('debe tener clase info-card-title en el título', () => {
        const { container } = render(
            <InfoCard title="Título Test">
                <p>Contenido</p>
            </InfoCard>
        );
        const titulo = container.querySelector('.info-card-title');
        expect(titulo).toBeTruthy();
        expect(titulo.textContent).toBe('Título Test');
    });

    it('debe tener clase info-card-content', () => {
        const { container } = render(
            <InfoCard>
                <p>Contenido</p>
            </InfoCard>
        );
        const content = container.querySelector('.info-card-content');
        expect(content).toBeTruthy();
    });

    it('debe renderizar children complejos', () => {
        render(
            <InfoCard title="Complejo">
                <div>
                    <h3>Subtítulo</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </div>
            </InfoCard>
        );
        
        expect(screen.getByText(/subtítulo/i)).toBeTruthy();
        expect(screen.getByText(/item 1/i)).toBeTruthy();
        expect(screen.getByText(/item 2/i)).toBeTruthy();
    });

    it('debe funcionar solo con children sin título', () => {
        render(
            <InfoCard>
                <span>Solo texto</span>
            </InfoCard>
        );
        expect(screen.getByText(/solo texto/i)).toBeTruthy();
    });
});