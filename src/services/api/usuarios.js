import apiClient from './axiosConfig';

export async function login(credentials) {
    const response = await apiClient.post('/usuarios/login', credentials);
    return response.data;
}

export async function register(userData) {
    const response = await apiClient.post('/usuarios', userData);
    return response.data;
}

export async function getUsuarios() {
    const response = await apiClient.get('/usuarios');
    return response.data;
}

export async function getUsuarioById(id) {
    const response = await apiClient.get(`/usuarios/${id}`);
    return response.data;
}

export async function updateUsuario(id, data) {
    const response = await apiClient.put(`/usuarios/${id}`, data);
    return response.data;
}

export async function deleteUsuario(id) {
    const response = await apiClient.delete(`/usuarios/${id}`);
    return response.data;
}

export async function cambiarRol(id, nuevoRol) {
    const response = await apiClient.put(`/usuarios/${id}/role?role=${nuevoRol}`);
    return response.data;
}