import request from '../../helpers/request';

const services = {
    registerUser(userData) {
        console.log(userData);
        return request.post('/auth/singup', userData);
    }
}

export default services;