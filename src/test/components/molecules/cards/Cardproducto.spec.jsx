// src/test/components/molecules/cards/CardProducto.spec.jsx
import React from 'react';
import { render } from '@testing-library/react';
import CardProducto from '../../../../components/molecules/cards/CardProducto';

describe('CardProducto Component', () => {
    
    const mockItem = {
        id: 1,
        nombre: 'Producto Test',
        precio: 1000,
        imagenUrl: '/img/test.jpg',
        categoria: {
            nombre: 'Test'
        }
    };

    it('debe renderizar sin errores', () => {
        const { container } = render(
            <CardProducto 
                item={mockItem} 
                onClick={() => {}} 
                onAddToCart={() => {}} 
            />
        );

        expect(container).toBeTruthy();
    });

    it('debe renderizar sin categoría', () => {
        const itemSinCategoria = { ...mockItem, categoria: null };
        
        const { container } = render(
            <CardProducto 
                item={itemSinCategoria} 
                onClick={() => {}} 
                onAddToCart={() => {}} 
            />
        );

        expect(container).toBeTruthy();
    });
});