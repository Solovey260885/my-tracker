import MainDiscription from "../../components/MainDiscription/MainDiscription.jsx";
import MainImage from "../../components/MainImage/MainImage.jsx";
import css from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={css.container}>
      <div className="top_main_page">
        <MainDiscription />
      </div>
      <MainImage />
    </div>
  );
};

export default MainPage;
