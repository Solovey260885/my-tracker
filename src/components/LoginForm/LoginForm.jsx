import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import Icon from "../Icons/Icon.jsx";

const LoginForm = () => {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "to short")
      .max(10, "To long")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(10, "to short")
      .max(15, "To long")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const usernameField = useId();
  const emailField = useId();
  const passwordField = useId();
  const msgFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={usernameField}>Username</label>
        <Field type="text" name="username" id={usernameField} />
        <ErrorMessage name="username" component="span" />

        <label htmlFor={emailField}>Email</label>
        <Field type="email" name="email" id={emailField} />
        <ErrorMessage name="email" component="span" />

        <label htmlFor={usernameField}>Password</label>
        <Field type="password" name="password" id={passwordField} />
        <ErrorMessage name="password" component="span" />

        <button type="submit">
          <Icon
            id={"icon-settings"}
            width={"50"}
            height={"50"}
            className={"icon"}
          />
        </button>

        <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId} rows="5" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
