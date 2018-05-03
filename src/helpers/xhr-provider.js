import axios from 'axios';
import {localStorage} from './';
import {API_URL, AUTH_TOKEN_KEY} from 'constants.js';

const request = axios.create({
    baseURL: API_URL
});

request.interceptors.request.use(setJwtHeader);

/**
 * Set jwt token in the authorization header under the 'Authorization' key
 *
 * @param {Object} config
 * @return {Object}
 */
function setJwtHeader(config) {
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`;
    return config;
}

export default request;
