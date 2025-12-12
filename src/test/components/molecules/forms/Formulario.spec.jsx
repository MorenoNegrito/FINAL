// src/test/components/molecules/forms/Formulario.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario from '../../../../components/molecules/forms/Formulario';

describe('Formulario Component', () => {
    
    const mockOnChange = jasmine.createSpy('onChange');

    beforeEach(() => {
        mockOnChange.calls.reset();
    });

    it('debe renderizar el subtítulo', () => {
        render(<Formulario subtitulo="Nombre de usuario" />);
        const subtitulo = screen.getByText(/nombre de usuario/i);
        expect(subtitulo).toBeTruthy();
        expect(subtitulo.tagName).toBe('H6');
    });

    it('debe renderizar el input', () => {
        render(<Formulario subtitulo="Email" placeholder="ejemplo@email.com" />);
        const input = screen.getByPlaceholderText(/ejemplo@email.com/i);
        expect(input).toBeTruthy();
    });

it('debe pasar el type al input', () => {
    render(<Formulario subtitulo="Contraseña" type="password" placeholder="Ingresa tu contraseña" />);
    
    // Buscar por placeholder o selector
    const input = screen.getByPlaceholderText(/ingresa tu contraseña/i);
    
    expect(input).toBeTruthy();
    expect(input.getAttribute('type')).toBe('password');
});

    it('debe usar type text por defecto', () => {
        render(<Formulario subtitulo="Campo" />);
        const input = screen.getByRole('textbox');
        expect(input.getAttribute('type')).toBe('text');
    });

    it('debe pasar el placeholder al input', () => {
        render(<Formulario subtitulo="Campo" placeholder="Ingresa aquí" />);
        const input = screen.getByPlaceholderText(/ingresa aquí/i);
        expect(input).toBeTruthy();
    });

    it('debe pasar el value al input', () => {
        render(<Formulario subtitulo="Campo" value="Valor inicial" onChange={mockOnChange} />);
        const input = screen.getByDisplayValue(/valor inicial/i);
        expect(input).toBeTruthy();
    });

    it('debe ejecutar onChange cuando el input cambia', () => {
        render(<Formulario subtitulo="Campo" onChange={mockOnChange} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'nuevo valor' } });
        expect(mockOnChange).toHaveBeenCalled();
    });

    it('debe tener la clase molecula-formulario', () => {
        const { container } = render(<Formulario subtitulo="Test" />);
        const wrapper = container.querySelector('.molecula-formulario');
        expect(wrapper).toBeTruthy();
    });

    it('debe tener clase form-subtitulo en el subtítulo', () => {
        const { container } = render(<Formulario subtitulo="Test" />);
        const subtitulo = container.querySelector('.form-subtitulo');
        expect(subtitulo).toBeTruthy();
        expect(subtitulo.textContent).toBe('Test');
    });

    it('debe pasar className al input', () => {
        const { container } = render(<Formulario subtitulo="Test" />);
        const input = container.querySelector('.form-input');
        expect(input).toBeTruthy();
    });

    it('debe funcionar con todos los props', () => {
        render(
            <Formulario 
                subtitulo="Email completo"
                type="email"
                placeholder="tu@email.com"
                value="test@test.com"
                onChange={mockOnChange}
            />
        );
        
        const subtitulo = screen.getByText(/email completo/i);
        const input = screen.getByPlaceholderText(/tu@email.com/i);
        
        expect(subtitulo).toBeTruthy();
        expect(input).toBeTruthy();
        expect(input.value).toBe('test@test.com');
        
        fireEvent.change(input, { target: { value: 'nuevo@email.com' } });
        expect(mockOnChange).toHaveBeenCalled();
    });
});