// src/test/components/molecules/cards/CardProductGeneral.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardProductGeneral from '../../../../components/molecules/cards/CardProductGeneral';

describe('CardProductGeneral Component', () => {
    
    const mockProducto = {
        id: 1,
        nombre: 'Juguete para Gatos',
        descripcion: 'Juguete interactivo',
        precio: 8990,
        imagenUrl: '/img/juguete.jpg',
        categoria: {
            id: 2,
            nombre: 'Juguetes'
        }
    };

    const mockOnAgregar = jasmine.createSpy('onAgregar');

    beforeEach(() => {
        mockOnAgregar.calls.reset();
    });

    it('debe retornar null si no hay producto', () => {
        const { container } = render(<CardProductGeneral producto={null} onAgregar={mockOnAgregar} />);
        expect(container.firstChild).toBeNull();
    });

    it('debe renderizar el nombre del producto', () => {
        render(<CardProductGeneral producto={mockProducto} onAgregar={mockOnAgregar} />);
        const nombre = screen.getByText(/juguete para gatos/i);
        expect(nombre).toBeTruthy();
        expect(nombre.tagName).toBe('H3');
    });

    it('debe renderizar la descripción', () => {
        render(<CardProductGeneral producto={mockProducto} onAgregar={mockOnAgregar} />);
        const descripcion = screen.getByText(/juguete interactivo/i);
        expect(descripcion).toBeTruthy();
    });

    it('debe formatear el precio en CLP', () => {
        render(<CardProductGeneral producto={mockProducto} onAgregar={mockOnAgregar} />);
        const precio = screen.getByText(/\$8\.990/);
        expect(precio).toBeTruthy();
    });

    it('debe renderizar la categoría', () => {
        render(<CardProductGeneral producto={mockProducto} onAgregar={mockOnAgregar} />);
        const categoria = screen.getByText(/juguetes/i);
        expect(categoria).toBeTruthy();
        expect(categoria.tagName).toBe('SPAN');
    });

    it('debe renderizar el botón Agregar cuando hay onAgregar', () => {
        render(<CardProductGeneral producto={mockProducto} onAgregar={mockOnAgregar} />);
        const button = screen.getByText(/agregar/i);
        expect(button).toBeTruthy();
    });

    it('no debe renderizar botón si no hay onAgregar', () => {
        render(<CardProductGeneral producto={mockProducto} />);
        const buttons = screen.queryAllByText(/agregar/i);
        expect(buttons.length).toBe(0);
    });

    it('debe ejecutar onAgregar con el producto al hacer clic', () => {
        render(<CardProductGeneral producto={mockProducto} onAgregar={mockOnAgregar} />);
        const button = screen.getByText(/agregar/i);
        fireEvent.click(button);
        expect(mockOnAgregar).toHaveBeenCalledWith(mockProducto);
    });

    it('debe mostrar "Sin nombre" si no hay nombre', () => {
        const productoSinNombre = { ...mockProducto, nombre: null };
        render(<CardProductGeneral producto={productoSinNombre} onAgregar={mockOnAgregar} />);
        const nombre = screen.getByText(/sin nombre/i);
        expect(nombre).toBeTruthy();
    });

    it('debe mostrar "Sin descripción" si no hay descripción', () => {
        const productoSinDesc = { ...mockProducto, descripcion: null };
        render(<CardProductGeneral producto={productoSinDesc} onAgregar={mockOnAgregar} />);
        const desc = screen.getByText(/sin descripción/i);
        expect(desc).toBeTruthy();
    });

    it('debe formatear precio 0', () => {
        const productoGratis = { ...mockProducto, precio: 0 };
        render(<CardProductGeneral producto={productoGratis} onAgregar={mockOnAgregar} />);
        const precio = screen.getByText(/\$0/);
        expect(precio).toBeTruthy();
    });

    it('debe funcionar sin categoría', () => {
        const productoSinCat = { ...mockProducto, categoria: null };
        render(<CardProductGeneral producto={productoSinCat} onAgregar={mockOnAgregar} />);
        const nombre = screen.getByText(/juguete para gatos/i);
        expect(nombre).toBeTruthy();
    });

    it('debe tener la estructura CSS correcta', () => {
        const { container } = render(<CardProductGeneral producto={mockProducto} onAgregar={mockOnAgregar} />);
        expect(container.querySelector('.main-cardProducto')).toBeTruthy();
        expect(container.querySelector('.body-cardProducto')).toBeTruthy();
        expect(container.querySelector('.cardProducto-content')).toBeTruthy();
    });
});