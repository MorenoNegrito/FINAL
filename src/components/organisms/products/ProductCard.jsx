// src/components/organisms/products/ProductCard.jsx
import React from 'react';
import ImageWithFallback from '../../atoms/ImageWithFallback';
import '../../../styles/components/organisms/products/ProductCard.css';

function ProductCard({ producto, onAgregar }) {
    if (!producto) {
        return null;
    }

    const formatPrecio = (precio) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(precio);
    };

    return (
        <div className="producto-card">
            <div className="producto-card-image-wrapper">
                <ImageWithFallback
                    src={producto.imagenUrl || ''}
                    alt={producto.nombre || 'Producto'}
                    className="producto-card-image"
                />
            </div>

            <h3>{producto.nombre || 'Sin nombre'}</h3>
            
            <p className="precio">
                {formatPrecio(producto.precio || 0)}
            </p>
            
            {onAgregar && (
                <button 
                    className="btn-agregar"
                    onClick={() => onAgregar(producto)}
                >
                    Agregar al Carrito
                </button>
            )}
        </div>
    );
}

export default ProductCard;