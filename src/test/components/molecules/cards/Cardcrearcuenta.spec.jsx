// src/test/components/molecules/cards/CardCrearCuenta.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardCrearCuenta from '../../../../components/molecules/cards/CardCrearCuenta';

describe('CardCrearCuenta Component', () => {

    const renderWithRouter = (component) => {
        return render(<BrowserRouter>{component}</BrowserRouter>);
    };

    it('debe renderizar el título', () => {
        renderWithRouter(<CardCrearCuenta />);
        const titulo = screen.getByText(/¿aún no tienes cuenta\?/i);
        expect(titulo).toBeTruthy();
        expect(titulo.tagName).toBe('H2');
    });

    it('debe renderizar la descripción', () => {
        renderWithRouter(<CardCrearCuenta />);
        const descripcion = screen.getByText(/regístrate ahora/i);
        expect(descripcion).toBeTruthy();
    });

    it('debe renderizar el botón Crear Cuenta', () => {
        renderWithRouter(<CardCrearCuenta />);
        const button = screen.getByText(/crear cuenta gratis/i);
        expect(button).toBeTruthy();
    });

    it('debe tener la clase card-promocional', () => {
        const { container } = renderWithRouter(<CardCrearCuenta />);
        const section = container.querySelector('.card-promocional');
        expect(section).toBeTruthy();
        expect(section.tagName).toBe('SECTION');
    });

    it('debe tener clase btn-accion-personalizado en el botón', () => {
        renderWithRouter(<CardCrearCuenta />);
        const button = screen.getByText(/crear cuenta gratis/i);
        expect(button.className).toContain('btn-accion-personalizado');
    });

    it('debe tener contenido promocional', () => {
        const { container } = renderWithRouter(<CardCrearCuenta />);
        const content = container.querySelector('.card-promocional-content');
        expect(content).toBeTruthy();
    });

    it('debe renderizar sin errores', () => {
        expect(() => {
            renderWithRouter(<CardCrearCuenta />);
        }).not.toThrow();
    });
});