import React, { useState } from "react";
import Item from "./Item";
import Button from "../Button";
import styles from "./style.css";

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
      <div className={styles.novigation}>
        <Button handleClick={() => smaller()}>
        smaller
        </Button>
        <Button handleClick={() => more()}>
        more
        </Button>
      </div>
      <div className={styles.novigation}>
      <Button handleClick={() => pageUp()}>
        Up
        </Button>
        <Button handleClick={() => pageDn()}>
        Down
        </Button>
      </div>
    </>
  );
};

export default List;
