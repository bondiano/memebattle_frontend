import { errors } from 'constants.js';

const errorHandler = (errorObj) => {
    const error = Object.keys(errorObj).map((keys) => {
        const name = errorObj[keys].name;
        return {[name]: errors[name]};
    });
    return error[0];
};

export default errorHandler;
