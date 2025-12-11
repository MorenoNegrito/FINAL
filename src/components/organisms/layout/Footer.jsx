import React from "react";
import Text from "../../atoms/Text";
import "../../../styles/components/organisms/layout/Footer.css";

const ENLACES = [
    { label: "Inicio", url: "/inicio" },
    { label: "Productos", url: "/productos" },
    { label: "Nosotros", url: "/nosotros" },
    { label: "Contacto", url: "/contacto" },
];

const CATEGORIAS_MOCK = ["Perros", "Gatos", "Accesorios", "Alimentos"];

function Footer() {
    return (
        <footer className="footer-principal">
            <div className="footer-contenido">
                <div className="contenedor-columnas">
                    
                    {/* ✅ Columna 1: Enlaces */}
                    <div className="columna">
                        <Text variant="h5" className="titulo">Enlaces</Text>
                        <ul>
                            {ENLACES.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="enlace-footer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ✅ Columna 2: Categorías */}
                    <div className="columna">
                        <Text variant="h5" className="titulo">Categorías</Text>
                        <ul>
                            {CATEGORIAS_MOCK.map((cat, index) => (
                                <li key={index}>
                                    <a 
                                        href={`/productos?cat=${cat}`} 
                                        className="enlace-footer"
                                    >
                                        {cat}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ✅ Columna 3: Contacto */}
                    <div className="columna">
                        <Text variant="h5" className="titulo">Contacto</Text>
                        <div className="contacto-info">
                            <a href="mailto:contacto@tienda.cl" className="contacto-link">
                                📧 contacto@tienda.cl
                            </a>
                            <a href="tel:+56912345678" className="contacto-link">
                                📞 +56 9 1234 5678
                            </a>
                            <p className="contacto-direccion">
                                📍 Santiago, Chile
                            </p>
                        </div>
                    </div>

                </div>

                {/* ✅ Copyright */}
                <div className="copyright">
                    <Text variant="p">
                        © {new Date().getFullYear()} PetStore. Todos los derechos reservados.
                    </Text>
                </div>
            </div>
        </footer>
    );
}

export default Footer;