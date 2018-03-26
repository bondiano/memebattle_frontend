import {request} from 'helpers';

const services = {
    registerUser(userData) {
        return request.post('/auth/signup', userData);
    },

    loginUser(userData) {
        return request.post('/auth/login', userData);
    }
};

export default services;
