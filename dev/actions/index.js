import store from "../store";

export const removeNews = id => {
  store.dispatch({
    type: "REMOVE_NEWS",
    payload: id
  });
};

export const updateNews = news => {
  store.dispatch({
    type: "UPDATE_NEWS",
    payload: news
  });
};

export const createNews = news => {
  store.dispatch({
    type: "CREATE_NEWS",
    payload: news
  });
};
