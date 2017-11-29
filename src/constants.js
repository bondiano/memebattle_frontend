const API_URL = process.env.API_URL;
const JWT_KEY = process.env.JWT_KEY;

const routes = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    RULES: '/rules',
    ABOUT: '/about',
    MODES: '/modes',
    LIDERBOARD: '/lidersboard',
    GAME_RUSH: '/mode/game-rush',
    GAME_TOURNAMENT: '/mode/game-tournament',
};

export {
    API_URL,
    JWT_KEY,
    routes,
};