import Icon from "../Icons/Icon.jsx";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <Icon id={"logo"} width={"114"} height={"20"} className={css.logo} />
    </div>
  );
};
export default Header;
