// src/test/components/molecules/cards/CardBody.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardBody from '../../../../components/molecules/cards/CardBody';

describe('CardBody Component', () => {
    
    const mockOnAddToCart = jasmine.createSpy('onAddToCart');

    beforeEach(() => {
        mockOnAddToCart.calls.reset();
    });

    it('debe renderizar el botón Agregar', () => {
        render(<CardBody onAddToCart={mockOnAddToCart} />);
        const button = screen.getByText(/agregar/i);
        expect(button).toBeTruthy();
    });

    it('debe ejecutar onAddToCart al hacer clic', () => {
        render(<CardBody onAddToCart={mockOnAddToCart} />);
        const button = screen.getByText(/agregar/i);
        fireEvent.click(button);
        expect(mockOnAddToCart).toHaveBeenCalled();
    });

    it('debe tener la clase btn-agregar-carrito', () => {
        render(<CardBody onAddToCart={mockOnAddToCart} />);
        const button = screen.getByText(/agregar/i);
        expect(button.className).toContain('btn-agregar-carrito');
    });

    it('debe renderizar la estructura card', () => {
        const { container } = render(<CardBody onAddToCart={mockOnAddToCart} />);
        const card = container.querySelector('.card');
        expect(card).toBeTruthy();
    });

    it('debe renderizar card-body', () => {
        const { container } = render(<CardBody onAddToCart={mockOnAddToCart} />);
        const cardBody = container.querySelector('.card-body');
        expect(cardBody).toBeTruthy();
    });

    it('debe funcionar con props adicionales sin usarlas', () => {
        // Las props no usadas no causan errores en runtime
        render(
            <CardBody 
                imagen="/img/test.jpg"
                title="Test"
                price={1000}
                onClick={() => {}}
                onAddToCart={mockOnAddToCart}
            />
        );
        const button = screen.getByText(/agregar/i);
        expect(button).toBeTruthy();
    });
});