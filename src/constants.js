import telegramIcon from '@/assets/images/social-icons/silhouette-icons/telegram.svg';
import vkIcon from '@/assets/images/social-icons/silhouette-icons/vk.svg';
import twitterIcon from '@/assets/images/social-icons/silhouette-icons/twitter.svg';
import facebookIcon from '@/assets/images/social-icons/silhouette-icons/facebook.svg';

const API_URL = process.env.API_URL;
const AUTH_TOKEN_KEY = 'token';

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

const socialNetwork = {
    telegram: {
        icon: telegramIcon,
        name: 'Telegram'
    },
    vk: {
        icon: vkIcon,
        name: 'Vkontakte'
    },
    twitter: {
        icon: twitterIcon,
        name: 'Twitter'
    },
    facebook: {
        icon: facebookIcon,
        name: 'Facebook'
    }
};

export {
    API_URL,
    AUTH_TOKEN_KEY,
    Routes,
    socialNetwork
};
