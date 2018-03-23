import request from 'helpers/request';

const services = {
    getLeaders(userData) {
        return request.post('/game/rating', userData);
    }
};

export default services;
