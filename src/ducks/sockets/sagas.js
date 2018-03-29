import { all, take } from 'redux-saga/effects';
// import { rushTypes } from 'ducks/games/rush';

function socketEcho() {
    // switch(action.type) {
    //     case rushTypes.
    // }
}

export default function* socketsRootSaga() {
    yield all([
        take(socketEcho)
    ]);
}
