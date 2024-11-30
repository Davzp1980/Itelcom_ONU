/* eslint-disable react/prop-types */
import { Field, Form, Formik } from "formik";
import css from "./Register_ONU.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFormData } from "../../redux/formDatas/selectors";
import { registerOnu } from "../../redux/formDatas/formdataReduser";
import { Button } from "@mui/material";

export default function Register_ONU() {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const initialValues = {
    login: "",
    ip_bdcom: "",
    num_onu: "",
    vlan: "",
  };
  function handleSubmit(values, actions) {
    dispatch(
      registerOnu({
        login: values.login,
        ip_bdcom: values.ip_bdcom,
        num_onu: values.num_onu,
        vlan: values.vlan,
      })
    );
    actions.resetForm();
  }
  return (
    <div>
      <h2>Регистрация ОНУ:</h2>
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
            name="ip_bdcom"
            placeholder="IP_DBCOM"
          />
          <Field
            className={css.field}
            type="text"
            name="num_onu"
            placeholder="Num_ONU 0/X:X"
          />
          <Field
            className={css.field}
            type="text"
            name="vlan"
            placeholder="VLAN / Подсеть абонента"
          />

          <Button className={css.button} type="submit" variant="contained">
            Регистрация ONU
          </Button>
        </Form>
      </Formik>

      <p>login: {formData.login}</p>
      <p>ip_bdcom: {formData.ip_bdcom}</p>
      <p>num_onu: {formData.num_onu}</p>
      <p>vlan: {formData.vlan}</p>
    </div>
  );
}
