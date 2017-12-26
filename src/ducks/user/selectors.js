export default {
    selectUser(state) {
        return state.user.user;
    },
    checkLogin(state) {   
        return state.user.login;
    },
    getError(state) {   
        return state.user.errors;
    },
};