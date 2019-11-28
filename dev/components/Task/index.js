import React from "react";
import styles from "./style.css";

const Task = () => (
  <>
    <div className={styles.task}>
      <h1>Домашнее задание 8</h1>

      <h2>
        Берем домашний новостной проект и делаем возможность открывать отдельные
        страницы с новостями
      </h2>
    </div>
    <h1>
      <a target="_blank" href="https://currentsapi.services">
        API News
      </a>
    </h1>
  </>
);
export default Task;
