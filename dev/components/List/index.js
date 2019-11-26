import React, { useState, useEffect } from "react";
import Item from "./Item";
import Button from "../Button";
import styles from "./style.css";
import { createNews } from "../../actions/news";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../api";

const List = () => {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState(useSelector(store => store.news));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startId, setStartId] = useState(0);
  const [len, setLen] = useState(2);
  const maxId = news.length;
  const newsList = news.slice(startId, startId + len);

  const dispatch = useDispatch();
  const create = data => dispatch(createNews(data));

  useEffect(() => {
    localStorage.setItem("newsList", JSON.stringify(news));
  });

  const getData = () => {
    setIsLoading(true);
    setError(null);
    getNews(search)
      .then(response => {
        setNews(response.data.news);
        create(response.data.news);
      })
      .catch(reject => {
        setError(`Server error ${reject.response.statusText}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSumbit = e => {
    e.preventDefault();
    getData();
  };

  const newsShow = () => {
    if (newsList.length > 0)
      return newsList.map(item => {
        return <Item key={item.id} item={item} />;
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
    <div>
      <section>
      
        <form className={styles.form  } onSubmit={handleSumbit}>
          <p><a href='https://currentsapi.services'>API News</a> </p>
          <input
            type="search"
            placeholder="category name"
            value={search}
            onChange={handleChange}
          />
          <Button disabled={isLoading}>search</Button>
        </form>
      </section>
      {error}
      <section>
          {isLoading ? <p>loading…</p> : null}
          {news ? (
      <ul className={styles.list}>
        {newsShow()}
        <div className={styles.novigation}>
          <Button handleClick={() => smaller()}>smaller</Button>
          <Button handleClick={() => more()}>more</Button>
        </div>
        <div className={styles.novigation}>
          <Button handleClick={() => pageUp()}>Up</Button>
          <Button handleClick={() => pageDn()}>Down</Button>
        </div>
      </ul>
      ) : (
            <p>Unfortunatelly, we can't find</p>
          )}
        </section>
    </div>
  );
};

export default List;
