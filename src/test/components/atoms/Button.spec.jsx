// src/test/components/atoms/Button.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/atoms/Button';

describe('Button Component', () => {
    
    it('debe renderizar el botón con texto', () => {
        render(<Button text="Haz clic" />);
        const button = screen.getByText(/haz clic/i);
        expect(button).toBeTruthy();
        expect(button.textContent).toBe('Haz clic');
    });

    it('debe ejecutar onClick cuando se hace clic', () => {
        const handleClick = jasmine.createSpy('handleClick');
        render(<Button text="Click" onClick={handleClick} />);
        
        fireEvent.click(screen.getByText(/click/i));
        expect(handleClick).toHaveBeenCalled();
    });

    it('debe aplicar variante primary por defecto', () => {
        render(<Button text="Primary" />);
        const button = screen.getByText(/primary/i);
        expect(button.className).toContain('btn-primary');
    });

    it('debe aplicar variante secondary', () => {
        render(<Button text="Secondary" variant="secondary" />);
        const button = screen.getByText(/secondary/i);
        expect(button.className).toContain('btn-secondary');
    });

    it('debe aplicar variante danger', () => {
        render(<Button text="Danger" variant="danger" />);
        const button = screen.getByText(/danger/i);
        expect(button.className).toContain('btn-danger');
    });

    it('debe aplicar tamaño small', () => {
        render(<Button text="Small" size="small" />);
        const button = screen.getByText(/small/i);
        expect(button.className).toContain('btn-small');
    });

    it('debe aplicar tamaño large', () => {
        render(<Button text="Large" size="large" />);
        const button = screen.getByText(/large/i);
        expect(button.className).toContain('btn-large');
    });

    it('debe aplicar clases personalizadas', () => {
        render(<Button text="Custom" className="mi-clase" />);
        const button = screen.getByText(/custom/i);
        expect(button.className).toContain('mi-clase');
    });

    it('debe ser type submit cuando se especifica', () => {
        render(<Button text="Submit" type="submit" />);
        const button = screen.getByText(/submit/i);
        expect(button.getAttribute('type')).toBe('submit');
    });

    it('debe funcionar sin onClick', () => {
        render(<Button text="Sin handler" />);
        const button = screen.getByText(/sin handler/i);
        expect(() => fireEvent.click(button)).not.toThrow();
    });
});