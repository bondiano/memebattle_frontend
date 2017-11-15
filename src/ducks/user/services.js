import request from '../../helpers/request';

const services = {
    registerUser(userData) {
        return request.post('/auth/signup', userData);
    },

    loginUser(userData) {
        return request.post('/auth/login', userData);
    },
};

export default services;
