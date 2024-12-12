import { useDispatch, useSelector } from "react-redux";
import { selectFormData } from "../../redux/formData/selectors";
import { registerOnu } from "../../redux/formData/formdataReducer";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import css from "./Check_Onu.module.css";

export default function Check_Onu() {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const initialValues = {
    ip_bdcom: "",
    port: "",
    number_onu: "",
  };
  function handleSubmit(values, actions) {
    dispatch(
      registerOnu({
        ip_bdcom: values.ip_bdcom,
        port: values.port,
        number_onu: values.number_onu,
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
            name="ip_bdcom"
            placeholder="IP_DBCOM"
          />
          <Field
            className={css.field}
            type="text"
            name="port"
            placeholder="Port 0/X"
          />
          <Field
            className={css.field}
            type="text"
            name="number_onu"
            placeholder="Номер ОНУ"
          />
          <button className={css.button} type="submit">
            Проверить чЁ тама
          </button>
        </Form>
      </Formik>
    </div>
  );
}
