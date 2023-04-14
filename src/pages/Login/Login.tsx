import React, { useContext, useState } from "react";
import styles from "./Login.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { UserLogin } from "../../types/UserLogin";
import { loginAccount } from "../../services/authentication";
import { AxiosError } from "axios";

export const Login: React.FC = () => {
  const context = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalWindowShown, setIsModalWindowShown] = useState(false);
  const navigate = useNavigate();

  context?.logout();

  const tryLogin = (values: UserLogin) => {
    loginAccount(values)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem(
            "userAuthCredentials",
            JSON.stringify(response.data)
          );
          context?.login();
          navigate("/");
        }
      })
      .catch((e: AxiosError) => {
        setErrorMessage(e.response?.data as string);
        setIsModalWindowShown(true);
      });
  };

  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.modalContainer}
        style={{ display: isModalWindowShown === true ? "flex" : "none" }}
      >
        <h3 className={styles.title}>Error</h3>
        <div className={styles.textContainer}>
          <p className={styles.text}>{errorMessage}</p>
        </div>
        <button
          className={styles.confirmBtn}
          onClick={() => setIsModalWindowShown(false)}
        >
          OK
        </button>
      </div>
      <Formik
        onSubmit={(values) => tryLogin(values)}
        initialValues={{
          username: "",
          password: "",
        }}
      >
        <Form>
          <section className={styles.mainBlock}>
            <h3 className={styles.title}>Log into account</h3>
            <div className={styles.form}>
              <div className={styles.input}>
                <Field
                  name="username"
                  placeholder="Username"
                  type="text"
                  className={styles.value}
                ></Field>
                <ErrorMessage
                  name="username"
                  component="p"
                  className={styles.error}
                ></ErrorMessage>
              </div>
              <div className={styles.input}>
                <Field
                  name="password"
                  placeholder="Password"
                  type="text"
                  className={styles.value}
                ></Field>
                <ErrorMessage
                  name="password"
                  component="p"
                  className={styles.error}
                ></ErrorMessage>
              </div>
            </div>
            <div className={styles.navigation}>
              <p className={styles.text}>Not a member</p>
              <Link to="/registration" className={styles.redirect}>
                Sing up
              </Link>
            </div>
            <button className={styles.confirm} type="submit">
              LOGIN ME
            </button>
          </section>
        </Form>
      </Formik>
    </div>
  );
};
