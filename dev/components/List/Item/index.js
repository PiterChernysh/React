import React, { useState, useEffect } from "react";
import Form from "../../Form";
import Icon from "../../Icon";
import Button from "../../Button";
import styles from "./style.css";

const Item = ({
  item = { news_title: "noname", text: "lorem ipsum" },
  removeFromList,
  updateFromList
}) => {
  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    setIsShowForm(false);
  }, [item]);
  return (
    <li className={styles.item}>
      {isShowForm ? (
        <Form type="edit" item={item} addFromProps={updateFromList} />
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
              <Button theme="small" handleClick={() => removeFromList(item.id)}>
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
