// src/test/components/molecules/cards/CarritoCard.spec.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CarritoCard from '../../../../components/molecules/cards/CarritoCard';

describe('CarritoCard Component', () => {
    
    const mockProducto = {
        id: 1,
        nombre: 'Alimento para Perros',
        imagenUrl: '/img/alimento.jpg',
        precio: 25990,
        cantidad: 2
    };

    const mockOnActualizar = jasmine.createSpy('onActualizar');
    const mockOnEliminar = jasmine.createSpy('onEliminar');

    beforeEach(() => {
        mockOnActualizar.calls.reset();
        mockOnEliminar.calls.reset();
    });

    it('debe renderizar el producto', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const nombre = screen.getByText(/alimento para perros/i);
        expect(nombre).toBeTruthy();
    });

    it('debe retornar null cuando no hay producto', () => {
        const { container } = render(
            <CarritoCard 
                producto={null}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        expect(container.firstChild).toBeNull();
    });

    it('debe mostrar la imagen del producto', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const img = screen.getByAltText(/alimento para perros/i);
        expect(img.getAttribute('src')).toBe('/img/alimento.jpg');
    });

    it('debe mostrar el precio unitario', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const precio = screen.getByText(/unitario: \$25\.990/i);
        expect(precio).toBeTruthy();
    });

    it('debe mostrar la cantidad actual', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const cantidad = screen.getByText('2');
        expect(cantidad).toBeTruthy();
    });

    it('debe calcular el subtotal correctamente', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        // 25990 * 2 = 51980
        const subtotal = screen.getByText(/\$51\.980/);
        expect(subtotal).toBeTruthy();
    });

    it('debe incrementar cantidad al hacer clic en +', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const btnMas = screen.getAllByRole('button').find(btn => btn.textContent === '+');
        fireEvent.click(btnMas);
        
        expect(mockOnActualizar).toHaveBeenCalledWith(1, 3);
    });

    it('debe decrementar cantidad al hacer clic en -', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const btnMenos = screen.getAllByRole('button').find(btn => btn.textContent === '-');
        fireEvent.click(btnMenos);
        
        expect(mockOnActualizar).toHaveBeenCalledWith(1, 1);
    });

    it('debe deshabilitar botón - cuando cantidad es 1', () => {
        const productoUnico = { ...mockProducto, cantidad: 1 };
        
        render(
            <CarritoCard 
                producto={productoUnico}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const btnMenos = screen.getAllByRole('button').find(btn => btn.textContent === '-');
        expect(btnMenos.disabled).toBe(true);
    });

    it('debe llamar a onEliminar con el id correcto', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const btnEliminar = screen.getByText(/eliminar/i);
        fireEvent.click(btnEliminar);
        
        expect(mockOnEliminar).toHaveBeenCalledWith(1);
    });

    it('debe usar imagen fallback cuando no hay imagenUrl', () => {
        const productoSinImagen = { ...mockProducto, imagenUrl: null };
        
        render(
            <CarritoCard 
                producto={productoSinImagen}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const img = screen.getByAltText(/alimento para perros/i);
        expect(img.getAttribute('src')).toBe('https://placehold.co/150x150?text=Sin+Imagen');
    });

    it('debe manejar error de imagen', () => {
        render(
            <CarritoCard 
                producto={mockProducto}
                onActualizarCantidad={mockOnActualizar}
                onEliminar={mockOnEliminar}
            />
        );
        
        const img = screen.getByAltText(/alimento para perros/i);
        fireEvent.error(img);
        
        expect(img.getAttribute('src')).toBe('https://placehold.co/150x150?text=Sin+Imagen');
    });
});