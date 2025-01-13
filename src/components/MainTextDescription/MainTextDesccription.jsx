import Button from "../Button/Button.jsx";
import css from "./MainTextDesccription.module.css";

const MainTextDescription = () => {
  return (
    <div className={css.wrapper_discription}>
      <p className={css.text}>Record daily water intake and track</p>
      <h1 className={css.title}>Water consumption tracker</h1>
      <div className={css.button_box}>
        <Button className={css.button} type={"button"}>
          Try tracker
        </Button>
        <Button className={css.button_right} type={"button"}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default MainTextDescription;
