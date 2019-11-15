import { useDispatch } from "react-redux";

export const removeNews = id => {
  const dispatch = useDispatch();
  dispatch({
    type: "REMOVE_NEWS",
    payload: id
  });
};

export const updateNews = news => {
  const dispatch = useDispatch();
  dispatch({
    type: "UPDATE_NEWS",
    payload: news
  });
};

export const createNews = news => {
  const dispatch = useDispatch();
  dispatch({
    type: "CREATE_NEWS",
    payload: news
  });
};
