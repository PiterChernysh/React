import { combineReducers } from 'redux';

import news from './news';
const reducer = combineReducers({
    news: news,
});

export default reducer;