import apiClient from './axiosConfig';

export async function getProductos() {
    const response = await apiClient.get('/productos');
    return response.data;
}

export async function getProductosActivos() {
    const response = await apiClient.get('/productos/activos');
    return response.data;
}

export async function getProductosDestacados() {
    const response = await apiClient.get('/productos/destacados');
    return response.data;
}

export async function getProductoById(id) {
    const response = await apiClient.get(`/productos/${id}`);
    return response.data;
}

export async function createProducto(data) {
    const response = await apiClient.post('/productos', data);
    return response.data;
}

export async function updateProducto(id, data) {
    const response = await apiClient.put(`/productos/${id}`, data);
    return response.data;
}

export async function deleteProducto(id) {
    const response = await apiClient.delete(`/productos/${id}`);
    return response.data;
}

export async function actualizarStock(id, stock) {
    const response = await apiClient.put(`/productos/${id}/stock?stock=${stock}`);
    return response.data;
}

export async function marcarDestacado(id, destacado) {
    const response = await apiClient.put(`/productos/${id}/destacado?destacado=${destacado}`);
    return response.data;
}