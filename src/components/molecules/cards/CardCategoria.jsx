import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import "../../../styles/components/molecules/cards/CardCategoria.css";

function CardCategoria({ imagen, titulo, descripcion }) {
    const navigate = useNavigate();

    const handleVerProductos = () => {
        navigate(`/productos?categoria=${titulo}`);
    };

    const handleRegistro = () => {
        navigate('/registro');
    };

    return (
        <div className="card-categoria">
            <div 
                className="img-fondo"
                style={{ backgroundImage: `url(${imagen})` }}
            >
                <div className="overlay-gradiente"></div>
                <div className="contenido-texto">
                    <Text variant="h3" className="titulo-cat">{titulo}</Text>
                    <Text variant="p" className="extra-cat">{descripcion}</Text>
                    
                    {/* ✅ Botones de acción */}
                    <div className="categoria-acciones">
                        <Button 
                            text="Ver Productos"
                            onClick={handleVerProductos}
                            className="btn-categoria-primary"
                        />
                        <Button 
                            text="Registrarme"
                            onClick={handleRegistro}
                            className="btn-categoria-secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCategoria;