import Axios from 'axios';

const Api = Axios.create ({
    baseURL:'https://api.themoviedb.org/3'
});

export default Api;