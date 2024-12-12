import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectFormData } from "../../redux/formData/selectors";
import { registerOnu } from "../../redux/formData/formdataReducer";
import { Button } from "@mui/material";
import css from "./Add_DHCP.module.css";

export default function Add_DHCP() {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const initialValues = {
    login: "",
    user_ip_address: "",
    vlan: "",
    xx: "",
  };
  function handleSubmit(values, actions) {
    dispatch(
      registerOnu({
        login: values.login,
        user_ip_address: values.user_ip_address,
        vlan: values.vlan,
        xx: values.xx,
      })
    );
    actions.resetForm();
  }

  function handleGetFromBilling() {
    console.log("Get from billing");
  }
  return (
    <div>
      <h2>Добавить DHCP:</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="login"
            placeholder="login"
          />
          <Field
            className={css.field}
            type="text"
            name="user_ip_address"
            placeholder="IP адрес абонента"
          />
          <Field
            className={css.field}
            type="text"
            name="vlan"
            placeholder="VLAN / Подсеть абонента"
          />
          <Field
            className={css.field}
            type="text"
            name="xx"
            placeholder="XX:XX:XX:XX:XX:XX"
          />

          <div className={css.buttonDiv}>
            <button className={css.button} type="submit">
              Взять в биллинге
            </button>
            <button className={css.button} onClick={handleGetFromBilling}>
              Регистрация
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
