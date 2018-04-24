const API_URL = process.env.API_URL;

const Routes = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    RULES: '/rules',
    ABOUT: '/about',
    MODES: '/modes',
    LEADERBOARD: '/lidersboard',
    GAME_RUSH: '/mode/game-rush',
    GAME_TOURNAMENT: '/mode/game-tournament',
    LOGOUT: '/logout'
};

export {
    API_URL,
    Routes
};
