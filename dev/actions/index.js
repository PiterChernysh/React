import dispatcher from "../dispatcher";

export const removeNews = id => {
  dispatcher.dispatch({
    type: "REMOVE_NEWS",
    payload: id
  });
};

export const updateNews = news => {
  dispatcher.dispatch({
    type: "UPDATE_NEWS",
    payload: news
  });
};

export const createNews = news => {
  dispatcher.dispatch({
    type: "CREATE_NEWS",
    payload: news
  });
};
