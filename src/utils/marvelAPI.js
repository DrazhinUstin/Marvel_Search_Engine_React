import axios from 'axios';
import md5 from 'md5';

const marvelAPI = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        limit: 10,
    },
});

marvelAPI.interceptors.request.use((config) => {
    const ts = new Date().getTime();
    const apikey = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
    const hash = md5(`${ts}${process.env.REACT_APP_MARVEL_API_PRIVATE_KEY}${apikey}`);
    return { ...config, params: { ...config.params, ts, apikey, hash } };
});

export default marvelAPI;
