import React, { useState } from "react";
import Item from "./Item";
const List = ({ newsFromList, removeFromProps, updateFromProps }) => {
  const [startId, setStartId] = useState(0);
  const [len, setLen] = useState(2);
  const maxId = newsFromList.length;
  const newsList = newsFromList.slice(startId, startId + len);

  const newsShow = () => {
    if (len < 0) setLen(2);
    else if (len > maxId) setLen(maxId);
    if (newsList.length > 0)
      return newsList.map(item => {
        return (
          <Item
            key={item.id}
            removeFromList={removeFromProps}
            updateFromList={updateFromProps}
            item={item}
          />
        );
      });
  };
  const smaller = () => {
    setLen(len - 2 >= 2 ? len - 2 : 2);
  };
  const more = () => {
    setLen(len + 2 <= maxId ? len + 2 : maxId);
  };

  const pageUp = () => {
    setStartId(startId - len >= 0 ? startId - len : 0);
  };
  const pageDn = () => {
    setStartId(startId + len < maxId ? startId + len : maxId - len);
  };
  return (
    <>
      {newsShow()}
      <div className="novigation">
        <button onClick={smaller} className="button">
          smaller
        </button>
        <button onClick={more} className="button">
          more
        </button>
      </div>
      <div className="novigation">
        <button onClick={pageUp} className="button">
          Up
        </button>
        <button onClick={pageDn} className="button">
          Down
        </button>
      </div>
    </>
  );
};

export default List;
