import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/organisms/auth/LoginForm";
import { login } from "../../services/api/usuarios";
import { useAuth } from "../../context/AuthContext";
import "../../styles/pages/public/Login.css";

function Login() {
    const navigate = useNavigate();
    const { loginUser, user } = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            const userRole = user.role || user.usuario?.role;
            
            if (userRole && userRole.toUpperCase() === 'ADMIN') {
                navigate("/admin", { replace: true });
            } else {
                navigate("/inicio", { replace: true });
            }
        }
    }, [user, navigate]);

    const handleLogin = async (email, password) => {
        setLoading(true);
        
        try {
            const credentials = { email, password };

            console.log("Enviando login:", credentials);
            const data = await login(credentials);
            
            console.log("Login exitoso:", data);

            loginUser(data);


        } catch (error) {
            console.error("Error en Login:", error);
            const errorMessage = error.response?.data?.message || error.message || "Error al iniciar sesión";
            alert("Error al ingresar: " + errorMessage);
        } finally {
            setLoading(false);
        }
    };

    if (user) return null;

    return (
        <div className="login-container">
            <LoginForm onLogin={handleLogin} loading={loading} />
        </div>
    );
}

export default Login;