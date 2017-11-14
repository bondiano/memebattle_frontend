import request from '../../helpers/request';

const services = {
    registerUser(userData) {
        console.log(userData);
        return request.post('/auth/signup', userData);
    }
};

export default services;
