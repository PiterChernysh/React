import React from "react";
import Title from "../Title";
import styles from "./style.css";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const Header = props => {
  const history = useHistory();
  const { rout } = props;
  const list = Object.keys(rout);
  const transition = page => {
      if(page != history.location.pathname) history.push(page);
  };
  const createMenu = () => {
    return list.map(item => {
      return (
        <Button handleClick={() => transition(rout[item])} key={item}>
          {item}
        </Button>
      );
    });
  };
  return (
    <header>
      <Title/>
      <nav className={styles.novigation}>{createMenu()}</nav>
    </header>
  );
};
export default Header;
