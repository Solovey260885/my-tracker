import css from "./Customers.module.css";
import clsx from "clsx";

const Customers = () => {
  return (
    <div className={css.customers}>
      <ul className={css.customers_list}>
        <li className={clsx(css.customers_item, css.customers_item_top)}></li>
        <li
          className={clsx(css.customers_item, css.customers_item_middle)}
        ></li>
        <li
          className={clsx(css.customers_item, css.customers_item_bottom)}
        ></li>
      </ul>
      <div>
        <p className={css.text}>
          Our <span className={css.text_happy}>happy</span> customers
        </p>
      </div>
    </div>
  );
};

export default Customers;
