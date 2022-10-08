import axios from 'axios';
import { getSession } from '../../_helpers/authCrud';

// axios instance for making requests 
const session = getSession();

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        "Content-Type": "application/json",
        "Content-Type": "multipart/form-data"
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (session) {
            const token = session.token
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error.response.data.message);
    }
);

axiosInstance.interceptors.response.use((res) => {
    return res;
}, async (err) => {
    if (err.response.status === 401) {
        localStorage.removeItem('session')
        window.location.reload()
    }
    return Promise.reject(err.response.data.message);
}
);

export default axiosInstance;

