import React, { useState, useEffect } from "react";
import Button from "../Button";
import Form from "../Form";
import styles from "./style.css";
import { createAllNews } from "../../actions/news";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../api";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

const List = () => {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState(useSelector(store => store.news));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startId, setStartId] = useState(0);
  const [len, setLen] = useState(2);
  const maxId = news.length;

  const dispatch = useDispatch();
  const create = data => dispatch(createAllNews(data));

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
    const newsList = news.slice(startId, startId + len);
    return (
      <Router>
        <ul>
          {newsList.map(item => (
            <li key={item.id}>
              <NavLink
                activeStyle={{
                  color: "red"
                }}
                exact
                to={`/news/${item.id}`}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path="/news/:id" component={Form} />
        </Switch>
      </Router>
    );
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
        <form className={styles.form} onSubmit={handleSumbit}>
          <div className={styles.novigation}>
            <input
              style={{ marginRight: "10px", marginTop: "0" }}
              type="search"
              placeholder="category name"
              value={search}
              onChange={handleChange}
            />
            <Button disabled={isLoading}>search</Button>
          </div>
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
