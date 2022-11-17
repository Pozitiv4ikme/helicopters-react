import styles from "./Checkout.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useItemsAmount, useTotalPrice } from "../../hooks";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const totalPrice = useTotalPrice();
  const amountOfItems = useItemsAmount();

  return (
    <>
      <Formik
        onSubmit={() => navigate("/cart/checkout/success")}
        initialValues={{
          name: "",
          surname: "",
          email: "",
          phone: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          adress: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Minimum of 3 characters")
            .max(25, "Maximum of 25 characters")
            .matches(/^[a-zA-Z]*$/, "Only characters are allowed")
            .required("Name is required"),
          surname: Yup.string()
            .min(3, "Minimum of 3 characters")
            .max(35, "Maximum of 35 characters")
            .matches(/^[a-zA-Z]*$/, "Only characters are allowed")
            .required("Surname is required"),
          email: Yup.string()
            .email("Must be a valid email address")
            .required("Email is required"),
          phoneNumber: Yup.string()
            .trim()
            .matches(
              /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
              "Invalid / unsupported phone format"
            ),
          cardNumber: Yup.string()
            .matches(
              /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
              "Invalid card number format (might be spaces between munbers)"
            )
            .required("Card number is required"),
          expiryDate: Yup.string()
            .matches(
              /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
              "Invalid expiry date format"
            )
            .required("Expiry date is required"),
          cvv: Yup.number()
            .typeError("Must be a number")
            .min(100, "Invalid value")
            .max(999, "Invalid value")
            .required("Cvv is required"),
        })}
      >
        <Form className={styles.cartPage}>
          <h3 className={styles.pageTitle}>Checkout</h3>
          <div className={styles.formContainer}>
            <div className={styles.mainBlock}>
              <div className={styles.inputs}>
                <section className={styles.rightColumn}>
                  <div className={styles.nameField}>
                    <label htmlFor="name" className={styles.labelText}>Name</label>
                    <Field name="name" placeholder="Willie" type="text" className={styles.input} />
                    <ErrorMessage
                      name="name"
                      component="h5"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.surnameField}>
                    <label htmlFor="surname" className={styles.labelText}>Surname</label>
                    <Field name="surname" placeholder="Davenport" type="text" className={styles.input}/>
                    <ErrorMessage
                      name="surname"
                      component="h5"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.phoneField}>
                    <label htmlFor="phone" className={styles.labelText}>Phone</label>
                    <Field name="phone" type="text" placeholder="optional" className={styles.input}/>
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className={styles.error}
                    />
                  </div>
                </section>
                <section className={styles.leftColumn}>
                  <div className={styles.cardNumberField}>
                    <label htmlFor="cardNumber" className={styles.labelText}>Card number</label>
                    <Field
                      name="cardNumber"
                      type="text"
                      placeholder="4539576961295228"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="cardNumber"
                      component="p"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.expiryDateField}>
                    <label htmlFor="expiryDate" className={styles.labelText}>Expiry date</label>
                    <Field name="expiryDate" type="text" placeholder="01/23" className={styles.input}/>
                    <ErrorMessage
                      name="expiryDate"
                      component="p"
                      className={styles.error}
                    />
                  </div>
                  <div className={styles.cvvField}>
                    <label htmlFor="cvv" className={styles.labelText}>CVV</label>
                    <Field name="cvv" type="text" placeholder="123" className={styles.input}/>
                    <ErrorMessage
                      name="cvv"
                      component="p"
                      className={styles.error}
                    />
                  </div>
                </section>
              </div>
              <div className={styles.emailField}>
                <label htmlFor="email" className={styles.labelText}>Email</label>
                <Field
                  name="email"
                  placeholder="example@example.com"
                  type="text"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="h6"
                  className={styles.error}
                />
              </div>
              <section className={styles.orderInfo}>
                <p className={styles.totalPrice}>
                  Total price: {totalPrice.countTotalPrice} $
                </p>
                <p>Total amount: {amountOfItems.countItems()}</p>
              </section>
            </div>
          </div>
          <div className={styles.navigation}>
            <Link className={styles.back} to="/cart">
              Go Back
            </Link>
            <button className={styles.confirm} type="submit">Confirm order info</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
