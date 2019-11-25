import React, { useState, useEffect } from "react";
import Form from "../../Form";
import Icon from "../../Icon";
import Button from "../../Button";
import styles from "./style.css";
import { removeNews } from "../../../actions/news";
import { useDispatch } from "react-redux";

const Item = props => {
  const {
    item = { news_title: "noname", text: "lorem ipsum" }
  } = props;
  const [isShowForm, setIsShowForm] = useState(false);
  
  const dispatch = useDispatch();
  const remove = (id)=>dispatch(removeNews(id));

  useEffect(() => {
    setIsShowForm(false);
  }, [item]);

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
              <Button theme="small" handleClick={() => remove(itesm.id)}>
                <Icon name="delete" />
              </Button>
            </div>
          </header>
          <Form type="edit" item={item} />
        </>
      ) : (
        <>
          <header className={styles.item__head}>
            <h3 className={styles.item__title}>{item.news_title}</h3>
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
          <p>{item.text}</p>
        </>
      )}
    </li>
  );
};

export default Item;
