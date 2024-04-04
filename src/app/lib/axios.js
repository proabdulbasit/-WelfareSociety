import axios from 'axios';

export default axios.create({
    baseURL : 'https://app.videocameramanwelfaresociety.com/api',
    withCredentials : true
});