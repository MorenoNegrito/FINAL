import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import '../../../styles/components/molecules/cards/CardCrearCuenta.css'; 

function CardCrearCuenta() {
    const navigate = useNavigate();

    const handleCrearCuenta = () => {
        navigate('/registro');
    };

    return (
        <section className="card-promocional">
            <div className="card-promocional-content">
                <h2 className="titulo">¿Aún no tienes cuenta?</h2>
                <p className="descripcion">
                    Regístrate ahora y disfruta de beneficios exclusivos, 
                    descuentos especiales y un seguimiento personalizado de tus pedidos.
                </p>
                
                <Button
                    text="Crear Cuenta Gratis"
                    onClick={handleCrearCuenta}
                    className="btn-accion-personalizado"
                />
            </div>
        </section>
    );
}

export default CardCrearCuenta;