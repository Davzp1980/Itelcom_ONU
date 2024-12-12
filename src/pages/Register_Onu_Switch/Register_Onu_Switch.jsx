import css from './Register_Onu_Switch.module.css';
import { useForm } from 'react-hook-form';
import { RegistrationOnuSwitch } from '../../api';
import toast from 'react-hot-toast';

export default function Register_Onu_Switch() {
  const toastError = { duration: 6000, style: { color: 'red' } };

  const { register, getValues, handleSubmit, reset } = useForm({
    defaultValues: {
      login: '',
      vlan: '',
    },
  });

  async function handleRegisterONU() {
    const res = await RegistrationOnuSwitch({
      address: getValues('address'), //loginu
      port: getValues('port'),
      ip_olt: getValues('ip_olt'),
      vlan: getValues('vlan'),
    });

    if (res.includes('Нет связи')) {
      toast.error(res, toastError);

      return;
    }
    toast.success('Успешная регистрация');
    reset();
  }
  return (
    <div>
      <h2>Регистрация ОНУ:</h2>

      <form className={css.form} onSubmit={handleSubmit(handleRegisterONU)}>
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
        <input
          className={css.field}
          {...register('address')}
          placeholder="Адрес / метка свича по заббиксу"
        />
        <input
          className={css.field}
          {...register('vlan')}
          placeholder="VLAN / Подсеть абонента"
          list="vlan"
        />
        <datalist id="vlan">
          <option value="12">12 подсеть</option>
          <option value="14">14 подсеть</option>
          <option value="16">16 подсеть</option>
          <option value="18">18 подсеть</option>
          <option value="20">20 подсеть</option>
          <option value="22">22 подсеть</option>
          <option value="24">24 подсеть</option>
        </datalist>

        <button className={css.button} type="submit">
          Регистрация ONU
        </button>
      </form>
    </div>
  );
}
