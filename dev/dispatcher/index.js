import { Dispatcher } from "flux";

import store from "../store";

const dispatcher = new Dispatcher();
dispatcher.register(action => {
  switch (action.type) {
    case "REMOVE_NEWS": {
      store.removeNews(action.payload);
      break;
    }
    case "UPDATE_NEWS": {
      store.updateNews(action.payload);
      break;
    }
    case "CREATE_NEWS": {
      store.createNews(action.payload);
      break;
    }
  }

  store.emitStore();
});

export default dispatcher;
