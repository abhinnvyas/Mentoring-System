import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://your-server-url.com',
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("authData")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("authData")).auth_token
        }`;
    }

    return req;
});

export default API;
