import request from '../../helpers/request';

const services = {
    getLiders(userData) {
        return request.post('/game/rating', userData);
    },
};

export default services;
