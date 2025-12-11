import apiClient from './axiosConfig';

class ProductoService {
    
    getAllProductos() {
        return apiClient.get('/productos');
    }

    createProducto(producto) {
        return apiClient.post('/productos', producto);
    }

    updateProducto(id, producto) {
        return apiClient.put(`/productos/${id}`, producto);
    }

    deleteProducto(id) {
        return apiClient.delete(`/productos/${id}`);
    }

    marcarDestacado(id, destacado) {
        return apiClient.put(`/productos/${id}/destacado?destacado=${destacado}`);
    }

    actualizarStock(id, stock) {
        return apiClient.put(`/productos/${id}/stock?stock=${stock}`);
    }
}

export default new ProductoService();