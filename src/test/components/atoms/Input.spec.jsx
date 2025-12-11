// src/test/components/atoms/Input.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../components/atoms/Input';

describe('Input Component', () => {
    
    it('debe renderizar el input', () => {
        render(<Input placeholder="Escribe aquí" />);
        const input = screen.getByPlaceholderText(/escribe aquí/i);
        expect(input).toBeTruthy();
    });

    it('debe renderizar con label', () => {
        render(<Input id="email" label="Correo" />);
        const label = screen.getByText(/correo/i);
        expect(label).toBeTruthy();
        expect(label.tagName).toBe('LABEL');
    });

    it('debe asociar label con input', () => {
        render(<Input id="username" label="Usuario" />);
        const input = screen.getByLabelText(/usuario/i);
        expect(input).toBeTruthy();
    });

    it('debe tener type text por defecto', () => {
        render(<Input id="test" />);
        const input = screen.getByRole('textbox');
        expect(input.getAttribute('type')).toBe('text');
    });

    it('debe aceptar type email', () => {
        render(<Input type="email" id="email" />);
        const input = document.querySelector('#email');
        expect(input.getAttribute('type')).toBe('email');
    });

    it('debe aceptar type password', () => {
        render(<Input type="password" id="pass" />);
        const input = document.querySelector('#pass');
        expect(input.getAttribute('type')).toBe('password');
    });

    it('debe ejecutar onChange cuando se escribe', () => {
        const handleChange = jasmine.createSpy('handleChange');
        render(<Input onChange={handleChange} />);
        
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalled();
    });

    it('debe mostrar el value proporcionado', () => {
        render(<Input value="Inicial" onChange={() => {}} />);
        const input = screen.getByDisplayValue(/inicial/i);
        expect(input).toBeTruthy();
        expect(input.value).toBe('Inicial');
    });

    it('debe ser required cuando se especifica', () => {
        render(<Input required={true} />);
        const input = screen.getByRole('textbox');
        expect(input.hasAttribute('required')).toBe(true);
    });

    it('debe tener clase form-input', () => {
        render(<Input />);
        const input = screen.getByRole('textbox');
        expect(input.className).toContain('form-input');
    });
});