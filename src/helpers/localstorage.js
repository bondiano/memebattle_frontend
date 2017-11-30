/** 
 * @param {String} method - 'get' for GET, 'set' for SET, 'clear' for CLEAR
 * @param {String} key
 * 
 * @returns {functions} - GET calls with default argument, SET with value argument
 */

const localstorage = (method, key) => {
    this.key = key;
    switch(method){
        case 'get':
            return getValue;
        case 'set':
            return setValue;
        case 'clear':
            return clearStorage;
        default: 
            console.error("Unknown method for localstorage");
            return;
    }
};

const getValue = (def) => 
    window.localStorage.getItem(this.key) ? window.localStorage.getItem(this.key) : def;

const setValue = (value) => 
    window.localStorage.setItem(this.key, value);

const clearStorage = () => 
    window.localStorage.clear();

export default localstorage;