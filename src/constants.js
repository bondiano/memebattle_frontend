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
    LOGOUT: '/logout',
};

const errors = { // errorName: message
    NOREQINPUT: 'Введите имя пользователя и пароль',
    NOTVALID: 'Введите корректные данные',
    SETTOKENERR: 'Пожалуйста, войдите снова',
    NOTSUCHID: 'Такого пользователя не существует',
    EXTUSR: 'Пользователь с таким именем уже существует',
    EXTEMAIL: 'Email уже занят',
    UNXPERR: 'Неожиданная ошибка, пожалуйста, сообщите нам детали',
    GETRAITERR: 'Невозможно получить рейтинг',
}

export {
    API_URL,
    JWT_KEY,
    routes,
    errors,
};