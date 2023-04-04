import axios from 'axios';

/* if token is present it will set it in headers 
 if not it will delete it from headers. */

const setAuthToken = (token) => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    } else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;