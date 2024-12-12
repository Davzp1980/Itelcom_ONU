import css from './Register_ONU.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData } from '../../redux/formData/selectors';
import { registerOnu } from '../../redux/formData/formdataReducer';
import { getFromBilling, RegistrationONU } from '../../api';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function Register_ONU() {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);

  const toastError = { duration: 6000, style: { color: 'red' } };

  const { register, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      login: '',
      vlan: '',
    },
  });

  useEffect(() => {
    reset({
      login: formData.loginu,
      vlan: formData.vlan,
    });
  }, [formData, reset]);

  async function handleRegisterONU() {
    const res = await RegistrationONU({
      login: getValues('login'),
      vlan: getValues('vlan'),
      ip_olt: getValues('ip_olt'),
      port: getValues('port'),
      speed: getValues('speed'),
    });

    if (res.includes('Нет связи')) {
      toast.error(res, toastError);

      dispatch(registerOnu({}));
      return;
    }
    toast.success('Успешная регистрация');

    dispatch(registerOnu({}));
    reset();
  }

  async function handleGetFromBilling() {
    const loginValue = getValues('login');

    const formData = await getFromBilling(loginValue);

    dispatch(
      registerOnu({
        login: formData.loginu, //server
        vlan: formData.vlan,
        speed: formData.speed,
      })
    );
  }
  return (
    <div>
      <h2>Регистрация ОНУ:</h2>
      <form className={css.form} onSubmit={handleSubmit(handleRegisterONU)}>
        <input
          className={css.field}
          {...register('login')}
          placeholder="login"
        />

        <input className={css.field} {...register('vlan')} placeholder="vlan" />
        <input
          className={css.field}
          {...register('speed')}
          list="options_speed"
          placeholder="speed"
        />
        <datalist id="options_speed">
          <option value="100">100MBit/s</option>
          <option value="200">200MBit/s</option>
          <option value="500">500MBit/s</option>
          <option value="1000">1000MBit/s</option>
        </datalist>

        <input
          className={css.field}
          {...register('ip_olt')}
          list="options_ip_olt"
          placeholder="IP_BDCOM"
        />
        <datalist id="options_ip_olt">
          <option value="172.16.1.50">PR53_BDCom_1 - 172.16.1.50</option>
          <option value="172.16.1.51">PR53_BDCom_2 - 172.16.1.51</option>
          <option value="172.16.1.52">PR53_BDCom_3 - 172.16.1.52</option>
        </datalist>

        <input
          className={css.field}
          {...register('port')}
          list="options_port"
          placeholder="port"
        />
        <datalist id="options_port">
          <option value=""></option>
          <option value="0/1:">ONU 0/1:X</option>
          <option value="0/2:">ONU 0/2:X</option>
          <option value="0/3:">ONU 0/3:X </option>
          <option value="0/4:">ONU 0/4:X </option>
          <option value="0/5:">ONU 0/5:X </option>
          <option value="0/6:">ONU 0/6:X </option>
          <option value="0/7:">ONU 0/7:X </option>
          <option value="0/8:">ONU 0/8:X </option>
          <option value="0/9:">ONU 0/9:X </option>
          <option value="0/10:">ONU 0/10:X </option>
          <option value="0/11:">ONU 0/11:X </option>
          <option value="0/12:">ONU 0/12:X </option>
          <option value="0/13:">ONU 0/13:X </option>
          <option value="0/14:">ONU 0/14:X </option>
          <option value="0/15:">ONU 0/15:X </option>
          <option value="0/16:">ONU 0/16:X </option>
        </datalist>

        <div className={css.buttonDiv}>
          <button className={css.button} type="submit">
            Регистрация ONU
          </button>
          <button
            className={css.button}
            type="button"
            onClick={handleGetFromBilling}
          >
            Взять в биллинге
          </button>
        </div>
      </form>
    </div>
  );
}
