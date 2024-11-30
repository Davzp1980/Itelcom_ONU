import { useDispatch, useSelector } from "react-redux";
import { selectFormData } from "../../redux/formData/selectors";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { registerOnu } from "../../redux/formData/formdataReducer";
import css from "./Register_Onu_Switch.module.css";

export default function Register_Onu_Switch() {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const initialValues = {
    ip_bdcom: "",
    num_onu: "",
    address: "",
    vlan: "",
  };
  function handleSubmit(values, actions) {
    dispatch(
      registerOnu({
        ip_bdcom: values.ip_bdcom,
        num_onu: values.num_onu,
        address: values.address,
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
            name="address"
            placeholder="Адрес / метка свича по заббиксу"
          />
          <Field
            className={css.field}
            type="text"
            name="vlan"
            placeholder="VLAN / Подсеть абонента"
          />

          <Button
            className={css.button}
            type="submit"
            variant="contained"
            color="success"
          >
            Регистрация ONU
          </Button>
        </Form>
      </Formik>

      <p>ip_bdcom: {formData.ip_bdcom}</p>
      <p>num_onu: {formData.num_onu}</p>
      <p>address: {formData.address}</p>
      <p>vlan: {formData.vlan}</p>
    </div>
  );
}
