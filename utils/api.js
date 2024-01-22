import axios from 'axios';

const api = axios.create({
    baseURL: 'https://phpv8.aait-d.com/dukanv2/public/api/website/', // Adjust the base URL based on your API endpoint
});

export default api;
