let newsListLocal = JSON.parse(localStorage.getItem("newsList"));
let newsList = newsListLocal ? newsListLocal : [];
if (newsListLocal == undefined)
  localStorage.setItem("newsList", JSON.stringify([]));

const reducer = (news = newsList, { type, payload }) => {
  switch (type) {
    case "REMOVE_NEWS":
      return news.filter(item => item.id !== payload);
    case "UPDATE_NEWS":
      return news.map(item => (payload.id === item.id ? payload : item));
    case "CREATE_NEWS":
      return [payload, ...news];
    case "CREATE_ALL_NEWS":
      return payload;
    default:
      return news;
  }
};

export default reducer;
