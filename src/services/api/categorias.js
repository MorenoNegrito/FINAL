import apiClient from './axiosConfig';

export const getCategorias = async () => {
    const response = await apiClient.get('/categorias');
    return response.data;
};

export const getCategoriasActivas = async () => {
    const response = await apiClient.get('/categorias/activas');
    return response.data;
};

export const createCategoria = async (data) => {
    const response = await apiClient.post('/categorias', data);
    return response.data;
};

export const updateCategoria = async (id, data) => {
    const response = await apiClient.put(`/categorias/${id}`, data);
    return response.data;
};

export const deleteCategoria = async (id) => {
    const response = await apiClient.delete(`/categorias/${id}`);
    return response.data;
};