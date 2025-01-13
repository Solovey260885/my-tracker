import clsx from "clsx";

import css from "./Benefits.module.css";

const Benefits = () => {
  return (
    <ul className={css.benefits_box}>
      <li className={clsx(css.benefits_text, css.benefits_text_harbit)}>
        Habit drive
      </li>
      <li className={clsx(css.benefits_text, css.benefits_text_view)}>
        View statistics
      </li>
      <li className={clsx(css.benefits_text, css.benefits_text_personal)}>
        Personal rate setting
      </li>
    </ul>
  );
};

export default Benefits;
