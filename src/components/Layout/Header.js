import { Fragment } from "react";

import mealsImgae from "../../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImgae} alt="A table full of elicius food!" />
      </div>
    </Fragment>
  );
};

export default Header;
