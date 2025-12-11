import axios from 'axios';

const API_URL = 'https://back-m41x.onrender.com/api';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(
    (config) => {
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                const token = userData.token || userData.accessToken || userData.usuario?.token;
                
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            } catch (error) {
                console.error('Error parseando token:', error);
            }
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const status = error.response.status;
            
            if (status === 401 || status === 403) {
                console.warn('⚠️ Sesión expirada o sin permisos');
                
                localStorage.removeItem('user');
                
                if (!window.location.pathname.includes('/login') && 
                    !window.location.pathname.includes('/registro')) {
                    window.location.href = '/login';
                }
            }
        }
        
        return Promise.reject(error);
    }
);

export default apiClient;