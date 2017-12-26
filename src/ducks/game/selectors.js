export default {
    selectUserRating(state) {   
        return state.game.user.rating;
    },
    selectLiderlist(state) {              
        return state.game.liderlist;
    },
    selectRightMeme(state) {
        return state.game.rightMeme;
    },
    selectLeftMeme(state) {
        return state.game.leftMeme;
    },
    selectWinner(state) {
        return state.game.winner;
    },
    selectInGame(state) {
        return state.game.inGame;
    },
    getError(state) {   
        return state.game.errors;
    },
};