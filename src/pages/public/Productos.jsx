import React, { useState, useEffect } from 'react';
import { getProductos } from '../../services/api/productos';
import CardProductGeneral from '../../components/molecules/cards/CardProductGeneral';
import BodyFiltro from '../../components/organisms/products/BodyFiltro';
import '../../styles/pages/public/Productos.css';

function Productos({ agregarAlCarrito }) {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filtroActual, setFiltroActual] = useState({ categoria: 'Todos', busqueda: '' });

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getProductos();
            
            console.log(' Productos cargados:', data);
            
            const productosArray = Array.isArray(data) ? data : [];
            
            setProductos(productosArray);
            setProductosFiltrados(productosArray);
        } catch (error) {
            console.error(' Error cargando productos:', error);
            setError(error.message);
            setProductos([]);
            setProductosFiltrados([]);
        } finally {
            setLoading(false);
        }
    };

    const aplicarFiltros = (categoria, busqueda) => {
        let resultado = [...productos];

        // Filtro por categoría
        if (categoria && categoria !== 'Todos') {
            resultado = resultado.filter(p => 
                p.categoria?.nombre?.toLowerCase() === categoria.toLowerCase()
            );
        }

        // Filtro por búsqueda
        if (busqueda && busqueda.trim()) {
            const terminoLower = busqueda.toLowerCase().trim();
            resultado = resultado.filter(p =>
                p.nombre?.toLowerCase().includes(terminoLower) ||
                p.descripcion?.toLowerCase().includes(terminoLower) ||
                p.categoria?.nombre?.toLowerCase().includes(terminoLower)
            );
        }

        setProductosFiltrados(resultado);
    };

    const handleFiltrar = (categoria) => {
        console.log(' Filtrando por categoría:', categoria);
        const nuevoFiltro = { ...filtroActual, categoria };
        setFiltroActual(nuevoFiltro);
        aplicarFiltros(nuevoFiltro.categoria, nuevoFiltro.busqueda);
    };

    const handleBuscar = (termino) => {
        console.log(' Buscando:', termino);
        const nuevoFiltro = { ...filtroActual, busqueda: termino };
        setFiltroActual(nuevoFiltro);
        aplicarFiltros(nuevoFiltro.categoria, nuevoFiltro.busqueda);
    };

    if (loading) {
        return (
            <div className="productos-container">
                <div className="productos-loading">
                    <div className="loading-spinner"></div>
                    <p>Cargando productos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="productos-container">
                <div className="productos-error">
                    <h2> Error al cargar productos</h2>
                    <p>{error}</p>
                    <button onClick={cargarProductos} className="btn-reintentar">
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="productos-container">
            <BodyFiltro 
                onFiltrar={handleFiltrar}
                onBuscar={handleBuscar}
            />

            <div className="productos-info">
                <p>
                    {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
                    {filtroActual.categoria !== 'Todos' && ` en "${filtroActual.categoria}"`}
                    {filtroActual.busqueda && ` para "${filtroActual.busqueda}"`}
                </p>
            </div>

            <div className="productos-grid">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <CardProductGeneral
                            key={producto.id}
                            producto={producto}
                            onAgregar={agregarAlCarrito}
                        />
                    ))
                ) : (
                    <div className="productos-empty">
                        <div className="empty-icon">🔍</div>
                        <h3>No se encontraron productos</h3>
                        <p>Intenta con otros filtros o términos de búsqueda</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Productos;