import apiClient from './axiosConfig';

export const adminService = {
    // --- PRODUCTOS ---
    productos: {
        getAll: async () => {
            const response = await apiClient.get('/productos');
            return response.data;
        },
        create: async (data) => {
            const response = await apiClient.post('/productos', data);
            return response.data;
        },
        update: async (id, data) => {
            const response = await apiClient.put(`/productos/${id}`, data);
            return response.data;
        },
        delete: async (id) => {
            const response = await apiClient.delete(`/productos/${id}`);
            return response.data;
        }
    },
    
    // --- CATEGORÍAS (ahora conectadas al backend real) ---
    categorias: {
        getAll: async () => {
            const response = await apiClient.get('/categorias');
            return response.data;
        },
        getActivas: async () => {
            const response = await apiClient.get('/categorias/activas');
            return response.data;
        },
        create: async (data) => {
            const response = await apiClient.post('/categorias', data);
            return response.data;
        },
        update: async (id, data) => {
            const response = await apiClient.put(`/categorias/${id}`, data);
            return response.data;
        },
        delete: async (id) => {
            const response = await apiClient.delete(`/categorias/${id}`);
            return response.data;
        }
    },

    // --- USUARIOS ---
    usuarios: {
        getAll: async () => {
            try {
                const response = await apiClient.get('/usuarios');
                return response.data;
            } catch (error) {
                console.error("Error obteniendo usuarios:", error);
                throw error;
            }
        },
        delete: async (id) => {
            const response = await apiClient.delete(`/usuarios/${id}`);
            return response.data;
        },
        cambiarRol: async (id, nuevoRol) => {
            const response = await apiClient.put(`/usuarios/${id}/role?role=${nuevoRol}`);
            return response.data;
        }
    },

    // --- PEDIDOS ---
    pedidos: {
        getAll: async () => {
            try {
                const response = await apiClient.get('/pedidos');
                return response.data;
            } catch (error) {
                console.error("Error obteniendo pedidos:", error);
                throw error;
            }
        },
        create: async (data) => {
            const response = await apiClient.post('/pedidos', data);
            return response.data;
        },
        cambiarEstado: async (id, estado) => {
            const response = await apiClient.put(`/pedidos/${id}/estado?estado=${estado}`);
            return response.data;
        }
    },

    // --- DASHBOARD ---
    dashboard: {
        getStats: async () => {
            try {
                const [productos, usuarios, pedidos] = await Promise.all([
                    apiClient.get('/productos'),
                    apiClient.get('/usuarios').catch(() => ({ data: [] })),
                    apiClient.get('/pedidos').catch(() => ({ data: [] }))
                ]);

                const prodArray = Array.isArray(productos.data) ? productos.data : [];
                const userArray = Array.isArray(usuarios.data) ? usuarios.data : [];
                const pedArray = Array.isArray(pedidos.data) ? pedidos.data : [];

                return {
                    ventas: pedArray.length * 15000,
                    pedidosPendientes: pedArray.filter(p => 
                        p.estado?.toLowerCase() === 'pendiente'
                    ).length,
                    usuarios: userArray.length,
                    productos: prodArray.length
                };
            } catch (error) {
                console.error("Dashboard error:", error);
                return { ventas: 0, pedidosPendientes: 0, usuarios: 0, productos: 0 };
            }
        }
    }
};

export default adminService;