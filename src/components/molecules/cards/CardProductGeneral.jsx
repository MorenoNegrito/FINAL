// src/components/molecules/cards/CardProductGeneral.jsx
import React from 'react';
import ImageWithFallback from '../../atoms/ImageWithFallback';
import Button from '../../atoms/Button';
import '../../../styles/components/molecules/cards/CardProductGeneral.css';

function CardProductGeneral({ producto, onAgregar }) {
    
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
        <div className="main-cardProducto">
            <div className="body-cardProducto">
                {/* */}
                {producto.categoria && (
                    <span className="cardProducto-categoria">
                        {producto.categoria.nombre}
                    </span>
                )}
                
                <div className="cardProducto-img-wrapper">
                    <ImageWithFallback
                        src={producto.imagenUrl || ''}
                        alt={producto.nombre || 'Producto'}
                        className="cardProducto-img"
                    />
                </div>

                <div className="cardProducto-content">
                    <h3 className="cardProducto-titulo">
                        {producto.nombre || 'Sin nombre'}
                    </h3>
                    <p className="cardProducto-subtitulo">
                        {producto.descripcion || 'Sin descripción'}
                    </p>

                    <div className="cardProducto-footer">
                        <p className="cardProducto-precio">
                            {formatPrecio(producto.precio || 0)}
                        </p>
                        
                        {onAgregar && (
                            <Button
                                text="Agregar"
                                onClick={() => onAgregar(producto)}
                                className="cardProducto-boton"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProductGeneral;