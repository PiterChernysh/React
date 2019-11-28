import React from "react";
import styles from "./style.css";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const Header = props => {
  const { rout } = props;
  const list = Object.keys(rout);

  const createMenu = () => {
    return list.map(item => {
      return (
        <Button key={item}>
          <NavLink
            exact
            to={rout[item]}
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            {item}
          </NavLink>
        </Button>
      );
    });
  };
  return (
    <header>
      <nav className={styles.novigation}>{createMenu()}</nav>
    </header>
  );
};
export default Header;
