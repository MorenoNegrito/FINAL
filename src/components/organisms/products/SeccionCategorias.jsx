import React from "react";
import CardCategoria from "../../molecules/cards/CardCategoria";
import "../../../styles/components/organisms/products/SeccionCategorias.css";

const CATEGORIAS = [
    {
        id: 1,
        titulo: "Perros",
        descripcion: "Todo lo que tu perro necesita para ser feliz",
        imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        titulo: "Gatos",
        descripcion: "Productos especiales para el cuidado de tu gato",
        imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop" // ✅ Imagen de gato cambiada
    },
    {
        id: 3,
        titulo: "Alimentos",
        descripcion: "Nutrición balanceada para tus mascotas",
        imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&auto=format&fit=crop"
    }
];

function SeccionCategorias() {
    return (
        <section className="seccion-categorias-container">
            <div className="encabezado-categorias">
                <span className="categoria-icono">🔍</span>
                <h2 className="titulo-seccion-cat">Explora por Categorías</h2>
                <p className="subtitulo-seccion-cat">
                    Encuentra todo lo que necesitas para el cuidado y bienestar de tus mascotas
                </p>
            </div>

            <div className="categorias-grid">
                {CATEGORIAS.map((cat) => (
                    <CardCategoria
                        key={cat.id}
                        titulo={cat.titulo}
                        descripcion={cat.descripcion}
                        imagen={cat.imagen}
                    />
                ))}
            </div>
        </section>
    );
}

export default SeccionCategorias;