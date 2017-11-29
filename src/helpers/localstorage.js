/** 
 * @param {String} method - 'get' for GET, 'set' for SET  
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
        default: 
            console.error("Unknown method for localstorage");
            return;
    }
};

const getValue = (def) => 
    window.localStorage.getItem(this.key) ? window.localStorage.getItem(this.key) : def;

const setValue = (value) => 
    window.localStorage.setItem(this.key, value);

export default localstorage;