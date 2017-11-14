import request from '../../helpers/request';

const services = {
    registerUser(userData) {
        return request.post('/auth/signup', userData);
    }
};

export default services;
