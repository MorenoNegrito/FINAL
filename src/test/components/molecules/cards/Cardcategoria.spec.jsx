// src/test/components/molecules/cards/CardCategoria.spec.jsx
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardCategoria from '../../../../components/molecules/cards/CardCategoria';

describe('CardCategoria Component', () => {
    
    const defaultProps = {
        imagen: '/img/test.jpg',
        titulo: 'Test',
        descripcion: 'Descripción test'
    };

    it('debe renderizar sin errores', () => {
        const { container } = render(
            <BrowserRouter>
                <CardCategoria {...defaultProps} />
            </BrowserRouter>
        );

        expect(container).toBeTruthy();
    });

    it('debe renderizar con props diferentes', () => {
        const props = {
            imagen: '/img/gatos.jpg',
            titulo: 'Gatos',
            descripcion: 'Para gatos'
        };

        const { container } = render(
            <BrowserRouter>
                <CardCategoria {...props} />
            </BrowserRouter>
        );

        expect(container).toBeTruthy();
    });
});