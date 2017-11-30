import axios from 'axios';
import { API_URL, JWT_KEY } from '../constants';
import jwt from 'jsonwebtoken';
import { fail } from 'assert';
import localStorage from './localstorage';

const secret = new Buffer(JWT_KEY, 'base64');

function send(config) {
    const url = `${API_URL}${config.url}`;
    let tokenAccess = localStorage('get', 'token_access')();
    let headers = {
        'Content-Type': 'application/json',
    };

    if(tokenAccess){
        jwt.verify(tokenAccess, secret, function(err, decoded) {
            if (err) {
                if(err.name !== 'TokenExpiredError'){
                    const error = new Error();
                    error.errors = [err];
                    throw error;
                }
                
                const tokenRefresh = localStorage('get', 'token_refresh')();

                if(!tokenRefresh){
                    const error = new Error();
                    error.errors = 'None refresh-token';
                    throw error;
                }

                axios({
                    method: 'post',
                    url: `${API_URL}/auth/refresh-token`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + tokenRefresh,
                    },
                    data: {
                        token_refresh: tokenRefresh,
                    },
                })
                .then(response =>{
                    localStorage('set', 'token_access')(response.data.token_access);
                    localStorage('set', 'token_refresh')(response.data.token_refresh);
                    tokenAccess = response.data.token_access;
                })
                .catch(er => {
                    const error = new Error();
                    error.errors = [err, er];
                    throw error;
                });
            }
        });  

        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenAccess,
        };
    }

    return axios(Object.assign({}, config, { url, headers })).then(
        (response) => {
            return response.data;
        },
        (responseWithError) => {
            const error = new Error();
            error.errors = [];
            try {
                const responseErr = responseWithError.response.data.error;
                const responseMes = responseWithError.response.data.message;
                error.errors.push({ key: 'common', message: responseMes, error: responseErr });
            } catch (err) {
                error.errors.push({ key: 'common', message: 'Error' });
            }
            throw error.errors;
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
