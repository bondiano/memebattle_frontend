import axios from 'axios';
import { API_URL } from '@/constants';


function send(config) {
    const url = `${API_URL}${config.url}`;
    const headers = {
        'Content-Type': 'application/json',
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
