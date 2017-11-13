import { appReducer } from '@/ducks/app';
import { routerReducer } from 'react-router-redux';
export default {
    app: appReducer,
    routing: routerReducer
};
