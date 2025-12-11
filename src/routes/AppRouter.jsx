import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/organisms/layout/ProtectedRoute'; // ✅ RUTA CORREGIDA

// LAYOUTS
import MainLayout from '../components/organisms/layout/MainLayout';
import AdminLayout from '../components/organisms/layout/AdminLayout';

// PÁGINAS PÚBLICAS
import Inicio from '../pages/public/Inicio';
import Productos from '../pages/public/Productos';
import Carrito from '../pages/public/Carrito';
import Login from '../pages/public/Login';
import Registro from '../pages/public/Registro';
import Nosotros from '../pages/public/Nosotros';
import Contacto from '../pages/public/Contacto';

// PÁGINAS DE USUARIO
import MisPedidos from '../pages/user/MisPedidos';
import Perfil from '../pages/user/Perfil';

// PÁGINAS ADMIN
import AdminDashboard from '../pages/admin/AdminDashboard';
import ProductosAdmin from '../pages/admin/ProductosAdmin';
import PedidosAdmin from '../pages/admin/PedidosAdmin';
import UsuariosAdmin from '../pages/admin/UsuariosAdmin';

function AppRouter({ carrito, agregarAlCarrito, eliminarDelCarrito }) {
    return (
        <AuthProvider>
            <Routes>
                {/* ===== ZONA PÚBLICA ===== */}
                <Route element={<MainLayout carrito={carrito} />}>
                    <Route path="/" element={<Navigate to="/inicio" replace />} />
                    <Route path="/inicio" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
                    <Route path="/carrito" element={<Carrito carrito={carrito} onEliminarDelCarrito={eliminarDelCarrito} />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    
                    {/* ===== RUTAS PROTEGIDAS DE USUARIO ===== */}
                    <Route 
                        path="/mis-pedidos" 
                        element={
                            <ProtectedRoute>
                                <MisPedidos />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/perfil" 
                        element={
                            <ProtectedRoute>
                                <Perfil />
                            </ProtectedRoute>
                        } 
                    />
                </Route>

                {/* ===== ZONA ADMIN (Protegida) ===== */}
                <Route 
                    path="/admin" 
                    element={
                        <ProtectedRoute requireAdmin={true}>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<AdminDashboard />} />
                    <Route path="productos" element={<ProductosAdmin />} />
                    <Route path="pedidos" element={<PedidosAdmin />} />
                    <Route path="usuarios" element={<UsuariosAdmin />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </AuthProvider>
    );
}

export default AppRouter;