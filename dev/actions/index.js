export const removeNews = id => ({
    type: "REMOVE_NEWS",
    payload: id
  })

export const updateNews = news => ({
    type: "UPDATE_NEWS",
    payload: news
  })

export const createNews = news => ({
    type: "CREATE_NEWS",
    payload: news
  })
