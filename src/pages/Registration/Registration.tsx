import { AxiosError, AxiosResponse } from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AppContext } from "../../context";
import { registerAccount } from "../../services/authentication";
import { UserLogin, UserRegistration } from "../../types";
import styles from "./Registration.module.scss";

export const Registration: React.FC = () => {
  const context = useContext(AppContext);
  const [errorMessage, setErrorMassage] = useState("");
  const [isModalWindowShown, setIsModalWindowShown] = useState(false);
  const navigate = useNavigate();

  context?.logout();

  const tryLogin = (values: UserRegistration) => {
    registerAccount(values)
      .then((response) => {
        if (response.status === 201) {
          localStorage.setItem(
            "userAuthCredentials",
            JSON.stringify(response.data)
          );
          context?.login();
          navigate("/");
          console.log("dupa")
        }
      })
      .catch((e: AxiosError) => {
        console.log(e);
        setErrorMassage("User with this username already exists");
        setIsModalWindowShown(true);
      });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.modalContainer} style={{display: isModalWindowShown === true ? "flex" : "none"}}>
        <h3 className={styles.title}>Error</h3>
        <div className={styles.textContainer}>
          <p className={styles.text}>{errorMessage}</p>  
        </div>
        <button className={styles.confirmBtn} onClick={() => setIsModalWindowShown(false)}>OK</button>
      </div>
      <Formik
        onSubmit={(values) =>
          tryLogin({ username: values.username, password: values.password, email: values.email })
        }
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(5, "Minimum of 5 characters")
            .max(30, "Maximum of 30 characters")
            .matches(/[a-zA-Z0-9_ ]/, "No special symbols allowed!")
            .required("Username is required"),
          email: Yup.string()
            .email("Must be a valid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "* Password must be at least 8 characters long")
            .matches(
              /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$$/,
              "Password should contain 1 of both lowercase, uppercase and special symbols, and 1 digit"
            )
            .required("Password field is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("This field is required"),
        })}
      >
        <Form>
          <div className={styles.mainBlock}>
            <h3 className={styles.title}>Register the new account</h3>
            <section className={styles.form}>
              <div className={styles.input}>
                <Field
                  name="username"
                  placeholder="Username"
                  type="text"
                  className={styles.value}
                />
                <ErrorMessage
                  name="username"
                  component="p"
                  className={styles.error}
                />
              </div>
              <div className={styles.input}>
                <Field
                  name="email"
                  placeholder="example@example.com"
                  type="text"
                  className={styles.value}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={styles.error}
                />
              </div>
              <div className={styles.input}>
                <Field
                  name="password"
                  placeholder="Your password"
                  type="password"
                  className={styles.value}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className={styles.error}
                />
              </div>
              <div className={styles.input}>
                <Field
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  type="password"
                  className={styles.value}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className={styles.error}
                />
              </div>
            </section>
            <div className={styles.navigation}>
              <p className={styles.text}>Already a member?</p>
              <Link to="/login" className={styles.redirect}>
                Sign in
              </Link>
            </div>
            <button type="submit" className={styles.confirm}>
              SIGN ME UP
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
