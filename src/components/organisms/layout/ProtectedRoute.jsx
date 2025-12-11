import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; 

function ProtectedRoute({ children, requireAdmin = false }) {
    const { user, isAdmin } = useAuth();
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    
    if (requireAdmin && !isAdmin()) {
        return <Navigate to="/inicio" replace />;
    }
    
    return children;
}

export default ProtectedRoute;
