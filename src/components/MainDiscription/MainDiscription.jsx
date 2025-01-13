// import Button from "../Button/Button.jsx";
import Header from "../Header/Header.jsx";
import MainTextDescription from "../MainTextDescription/MainTextDesccription.jsx";
import css from "./MainDiscription.module.css";

const MainDiscription = () => {
  return (
    <div className={css.discription_container}>
      <Header />
      <MainTextDescription />
    </div>
  );
};

export default MainDiscription;
