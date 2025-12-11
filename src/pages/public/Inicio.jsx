// src/pages/public/Inicio.jsx
import React, { useState, useEffect } from 'react';
import { getProductos } from '../../services/api/productos';
import CardPresentacion from '../../components/organisms/shared/CardPresentacion'; 
import SeccionCategorias from '../../components/organisms/products/SeccionCategorias';
import SeccionDestacados from '../../components/organisms/products/SeccionDestacados';
import CardCrearCuenta from '../../components/molecules/cards/CardCrearCuenta';
import '../../styles/pages/public/Inicio.css';

function Inicio({ agregarAlCarrito }) {
    const [productosDestacados, setProductosDestacados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        cargarProductosDestacados();
    }, []);

    const cargarProductosDestacados = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getProductos();
            
            console.log('✅ Productos cargados en Inicio:', data);
            
            const productosArray = Array.isArray(data) ? data : [];
            
            // Filtrar solo destacados
            const destacados = productosArray.filter(p => p.destacado === true);
            
            setProductosDestacados(destacados);
        } catch (error) {
            console.error('❌ Error cargando productos destacados:', error);
            setError(error.message);
            setProductosDestacados([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="inicio-container">
            <CardPresentacion />
            
            <SeccionCategorias />
            
            <SeccionDestacados 
                productos={productosDestacados}
                agregarAlCarrito={agregarAlCarrito}
                loading={loading}
                error={error}
            />
            
            <CardCrearCuenta />
        </div>
    );
}

export default Inicio;