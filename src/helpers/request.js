import axios from 'axios';
import { API_URL } from '../constants';
const jwt = require('webcrypto-jwt');

const isValidToken = (token) => {
    const decryped =  JSON.parse(jwt.decodeJWT(token));
    return decryped.exp - 3600 >= Math.floor(Date.now() / 1000);
}

function send(config) {
    const url = `${API_URL}${config.url}`;
    const tokenAccess = localStorage.getItem('token_access');
    let headers = {
        'Content-Type': 'application/json',
    };

    if(isValidToken(tokenAccess)){
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenAccess,
        };
    };
    
    
    return axios(Object.assign({}, config, { url, headers })).then(
        (response) => {
            return response.data;
        },
        (responseWithError) => responseWithError);

}

const request = {
    async post(url, data) {
        return send({ url, data, method: 'POST' });
    },
    async get(url, options) {
        return send({ url, params: options, method: 'GET' });
    },
    async put(url, data) {
        return send({ url, data, method: 'PUT' });
    },
    async delete(url) {
        return send({ url, method: 'DELETE' });
    },
};

export default request;
