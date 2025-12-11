import React, { useState, useEffect } from 'react';
import { getCategoriasActivas } from '../../../services/api/categorias';
import Button from '../../atoms/Button';
import '../../../styles/components/organisms/products/BodyFiltro.css';

function BodyFiltro({ onFiltrar, onBuscar }) {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    useEffect(() => {
        cargarCategorias();
    }, []);

    const cargarCategorias = async () => {
        try {
            const data = await getCategoriasActivas();
            setCategorias(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error cargando categorías:', error);
            setCategorias([]);
        }
    };

    const handleCategoriaClick = (nombreCategoria) => {
        setCategoriaSeleccionada(nombreCategoria);
        if (onFiltrar) {
            onFiltrar(nombreCategoria);
        }
    };

    const handleBusquedaChange = (e) => {
        const valor = e.target.value;
        setTerminoBusqueda(valor);
        if (onBuscar) {
            onBuscar(valor);
        }
    };

    const handleBusquedaSubmit = (e) => {
        e.preventDefault();
        if (onBuscar) {
            onBuscar(terminoBusqueda);
        }
    };

    return (
        <section className="seccion-filtro">
            <div className="controles-filtro">
                
                {/* Búsqueda */}
                <div className="seccion-busqueda">
                    <h3 className="titulo-seccion">Buscar Productos</h3>
                    <form onSubmit={handleBusquedaSubmit} className="wrapper-busqueda">
                        <input
                            type="text"
                            className="input-busqueda"
                            placeholder="Buscar por nombre..."
                            value={terminoBusqueda}
                            onChange={handleBusquedaChange}
                        />
                    </form>
                </div>

                {/* Filtro por Categorías */}
                <div className="seccion-categorias">
                    <h3 className="titulo-seccion">Filtrar por Categoría</h3>
                    <div className="botones-filtro">
                        <Button
                            text="Todos"
                            onClick={() => handleCategoriaClick('Todos')}
                            className={categoriaSeleccionada === 'Todos' ? 'btn-primary' : 'btn-secondary'}
                        />
                        
                        {categorias.map((categoria) => (
                            <Button
                                key={categoria.id}
                                text={categoria.nombre}
                                onClick={() => handleCategoriaClick(categoria.nombre)}
                                className={categoriaSeleccionada === categoria.nombre ? 'btn-primary' : 'btn-secondary'}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default BodyFiltro;