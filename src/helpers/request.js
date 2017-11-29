import axios from 'axios';
import { API_URL, JWT_KEY } from '../constants';
import jwt from 'jsonwebtoken';
import { fail } from 'assert';
import localStorage from './localstorage';

const secret = new Buffer(JWT_KEY, 'base64');

const isValidToken = (token) => {
    if(!token){
        return false;
    };

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            console.error("Error:", err.message);
            if(err.name === 'TokenExpiredError'){
                console.log(err);
                //...
            }
            return false;
        }
    });  
    return true;
};

function send(config) {
    const url = `${API_URL}${config.url}`;
    const tokenAccess = localStorage('get', 'token_access')();
    let headers = {
        'Content-Type': 'application/json',
    };

    if(isValidToken(tokenAccess)) {
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenAccess,
        };
    };

    return axios(Object.assign({}, config, { url, headers })).then(
        (response) => {
            return response.data;
        },
        (responseWithError) => {
            const error = new Error();
            error.errors = [];
            try {
                const responseErr = responseWithError.response.data.error;
                error.errors.push({ key: 'common', message: responseErr });
            } catch (err) {
                error.errors.push({ key: 'common', message: 'Error' });
            }
            throw error;
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
