import axios from 'axios';
import {
    API_URL
} from 'constants.js';

const request = axios.create({
    baseURL: API_URL
});

export default request;
