import React, { useState } from "react";
import Button from "../Button";
import styles from "./style.css";
import { useSelector } from "react-redux";
import Error from "../Error";

const Form = props => {
  const id = props.match.params.id;
  const list = useState(useSelector(store => store.news));
  const news = list[0].filter(item => {
    if(item.id == id) return item;
  })[0];
  const formatDate = date => {
    let new_date = new Date(date);
    let dd = new_date.getDate();
    if (dd < 10) dd = "0" + dd;

    let mm = new_date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    let yy = new_date.getFullYear() % 100;
    if (yy < 10) yy = "0" + yy;
    return dd + "." + mm + "." + yy;
  };
  return (
    <>
    {
      news?(<form className={styles.form}>
        <h1>{news.title}</h1>
        <img style={{ width: "400px" }} src={news.image} />
        <p>{news.description}</p>
        <p>Author: {news.author}</p>
        <p>A source: {news.url}</p>
        <p>Published: {formatDate(news.published)}</p>
      </form>):(<Error/>)

    }
    </>
  );
};

export default Form;
