import { appReducer } from '@/ducks/app';
import { userReducer } from '@/ducks/user';
import { routerReducer } from 'react-router-redux';
export default {
    app: appReducer,
    routing: routerReducer
};
