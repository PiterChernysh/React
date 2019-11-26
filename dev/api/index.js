import axios from 'axios';

const VERSION = 'v1';

const API_KEY = process.env.API_KEY;

export const getNews = name => (
    axios(`https://api.currentsapi.services/${VERSION}/search?category=${name}&language=en&apiKey=${API_KEY}`)
);