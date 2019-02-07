import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://homework65-elza.firebaseio.com/' // Your URL here!
});


export default instance;