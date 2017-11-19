import axios from 'axios';
import { API_URL } from '../constants';
//import jwt from 'webcrypto-jwt';

const isValidToken = (token) => {
    
    if(!token){
        return false;
    }

    const re = /[a-z0-9A-Z]{3,}\.[a-z0-9A-Z]{3,}\.[a-z0-9A-Z]{3,}/g
    if(!token.match(re)){
        return false;
    }

    const exp =  JSON.parse(jwt.decodeJWT(token)).exp;
    if(exp - 3600 >= Math.floor(Date.now() / 1000)){
        return true;
    }

    if(exp - 3600 < Math.floor(Date.now() / 1000)){
        /* TODO: REWORK IT!!! */
        const tokenRefresh = window.localStorage.getItem('token_refresh');

        if(!tokenRefresh){
            return false;
        }

        if(!tokenRefresh.match(re)){
            return false;
        }

        const config = {
            token_refresh: tokenRefresh,
            method: 'POST',
        };

        const url = `${API_URL}/auth/refresh-token`;    
        const headers = {
            'Content-Type': 'application/json',
        };
        
        axios.post(url,{token_refresh: tokenRefresh,})
        .then(response => {
            window.localStorage.setItem('token_refresh', response.data.token_refresh);
            window.localStorage.setItem('token_access', response.data.token_access);
            return response.data
        })
        .catch((responseWithError) =>{
            console.log(responseWithError);
            return responseWithError;
        }); 
        return true
    }
}

function send(config) {
    const url = `${API_URL}${config.url}`;
    const tokenAccess = window.localStorage.getItem('token_access');
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
        (responseWithError) =>{
            console.log(responseWithError);
            return responseWithError;
        }); 


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
