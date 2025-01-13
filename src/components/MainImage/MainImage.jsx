import Benefits from "../Benefits/Benefits.jsx";
import Customers from "../Customers/Customers.jsx";
import css from "./MainImage.module.css";

const MainImage = () => {
  return (
    <div>
      <div className={css.image}>
        <Customers />
        <Benefits />
      </div>
    </div>
  );
};
export default MainImage;
