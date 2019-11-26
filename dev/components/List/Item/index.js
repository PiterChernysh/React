import React, { useState, useEffect } from "react";
import Form from "../../Form";
import Icon from "../../Icon";
import Button from "../../Button";
import styles from "./style.css";
import { removeNews } from "../../../actions/news";
import { useDispatch } from "react-redux";

const Item = props => {
  const { item } = props;
  const [isShowForm, setIsShowForm] = useState(false);

  const dispatch = useDispatch();
  const remove = id => dispatch(removeNews(id));

  useEffect(() => {
    setIsShowForm(false);
  }, [item]);
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
    <li className={styles.item}>
      {isShowForm ? (
        <>
          <header className={styles.item__head}>
            <h3 className={styles.item__title}>Update news</h3>
            <div className={styles.item__action}>
              <Button
                theme="small"
                handleClick={() => setIsShowForm(!isShowForm)}
              >
                <Icon name="noEdit" />
              </Button>
              <Button theme="small" handleClick={() => remove(item.id)}>
                <Icon name="delete" />
              </Button>
            </div>
          </header>
          <Form type="edit" item={item} />
        </>
      ) : (
        <>
          <header className={styles.item__head}>
            <h3 className={styles.item__title}>{item.title}</h3>
            <div className={styles.item__action}>
              <Button
                theme="small"
                handleClick={() => setIsShowForm(!isShowForm)}
              >
                <Icon name="edit" />
              </Button>
              <Button theme="small" handleClick={() => remove(item.id)}>
                <Icon name="delete" />
              </Button>
            </div>
          </header>
          {item.image !== "None" ? <img style={{width: "400px"}} src={item.image} /> : ""}

          <p>{item.description}</p>
          <p>Author: {item.author}</p>
          <p>A source: {item.url}</p>
          <p>Published: {formatDate(item.published)}</p>
        </>
      )}
    </li>
  );
};

export default Item;
