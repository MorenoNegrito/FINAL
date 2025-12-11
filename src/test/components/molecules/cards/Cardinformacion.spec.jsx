// src/test/components/molecules/cards/CardInformacion.spec.jsx
import React from 'react';
import { render } from '@testing-library/react';
import CardInformacion from '../../../../components/molecules/cards/CardInformacion';

describe('CardInformacion Component', () => {

    it('debe renderizar sin errores', () => {
        const { container } = render(
            <CardInformacion 
                imagen="/img/test.jpg"
                cargo="Cargo Test"
                descripcion="Descripción test"
            />
        );

        expect(container).toBeTruthy();
    });

    it('debe renderizar con icono', () => {
        const { container } = render(
            <CardInformacion 
                icono="fa-star"
                cargo="Cargo Test"
                descripcion="Descripción test"
            />
        );

        expect(container).toBeTruthy();
    });

    it('debe renderizar solo con cargo', () => {
        const { container } = render(
            <CardInformacion 
                cargo="Cargo Test"
            />
        );

        expect(container).toBeTruthy();
    });
});