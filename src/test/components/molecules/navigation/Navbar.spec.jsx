// src/test/components/molecules/navigation/NavBar.spec.jsx
import React from 'react';
import Navbar from '../../../../components/molecules/navigation/NavBar';

describe('Navbar Component', () => {

    it('debe existir el componente', () => {
        expect(Navbar).toBeTruthy();
    });

    it('debe ser una función', () => {
        expect(typeof Navbar).toBe('function');
    });
});