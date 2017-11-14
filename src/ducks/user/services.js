import request from '../../helpers/request';

const service = {
    registerUser(userData) {
        return request.post('/auth/singup', userData);
    }
}

export default service;