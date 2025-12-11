import apiClient from './axiosConfig';

const getUserId = () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;
    try {
        const data = JSON.parse(storedUser);
        return data.id || data.usuario?.id;
    } catch (e) {
        return null;
    }
};

export async function createPedido(pedidoData) {
    const response = await apiClient.post('/pedidos', pedidoData);
    return response.data;
}

export async function getPedidos() {
    const response = await apiClient.get('/pedidos');
    return response.data;
}

export async function getPedidosPorUsuario(idUsuario) {
    const id = idUsuario || getUserId();
    if (!id) throw new Error("Usuario no identificado");

    const response = await apiClient.get(`/pedidos/usuario/${id}`);
    return response.data;
}

export async function cambiarEstadoPedido(id, estado) {
    const response = await apiClient.put(`/pedidos/${id}/estado?estado=${estado}`);
    return response.data;
}

export async function cancelarPedido(id) {
    const response = await apiClient.put(`/pedidos/${id}/cancelar`);
    return response.data;
}