// src/components/organisms/products/SeccionDestacados.jsx
import React from 'react';
import ProductCard from './ProductCard';
import '../../../styles/components/organisms/products/SeccionDestacados.css';

function SeccionDestacados({ productos, agregarAlCarrito, loading, error }) {
    if (loading) {
        return (
            <section className="seccion-contenedor">
                <h2 className="titulo-seccion">Productos Destacados</h2>
                <p className="subtitulo">Los favoritos de nuestros clientes</p>
                
                <div className="loading-state">
                    <div className="loading-spinner"></div>
                    <p>Cargando productos destacados...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="seccion-contenedor">
                <h2 className="titulo-seccion">Productos Destacados</h2>
                <div className="error-state">
                    <p>⚠️ Error al cargar productos destacados</p>
                </div>
            </section>
        );
    }

    if (!productos || productos.length === 0) {
        return (
            <section className="seccion-contenedor">
                <h2 className="titulo-seccion">Productos Destacados</h2>
                <p className="subtitulo">Los favoritos de nuestros clientes</p>
                
                <div className="empty-state">
                    <div className="empty-state-icon">📦</div>
                    <p>No hay productos destacados disponibles</p>
                </div>
            </section>
        );
    }

    return (
        <section className="seccion-contenedor">
            <h2 className="titulo-seccion">Productos Destacados</h2>
            <p className="subtitulo">Los favoritos de nuestros clientes</p>
            
            <div className="grid-cards">
                {productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onAgregar={agregarAlCarrito}
                    />
                ))}
            </div>
        </section>
    );
}

export default SeccionDestacados;