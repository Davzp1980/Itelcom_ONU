import css from './Unregister_Onu.module.css';
import { UnregisterOnu } from '../../api';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function Unregister_Onu() {
  const toastError = { duration: 6000, style: { color: 'red' } };

  const { register, getValues, handleSubmit, reset } = useForm({
    defaultValues: {
      login: '',
      vlan: '',
    },
  });

  async function handleUnregisterONU() {
    const res = await UnregisterOnu({
      port: getValues('port'),
      ip_olt: getValues('ip_olt'),
    });

    console.log(res);

    if (res === undefined || res.includes('Нет связи')) {
      toast.error(res ?? 'Connection Error', toastError);

      return;
    }
    toast.success('Успешная разрегистрация');
    reset();
  }
  return (
    <div>
      <h2>Разрегистрация ОНУ:</h2>
      <form className={css.form} onSubmit={handleSubmit(handleUnregisterONU)}>
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

        <button className={css.button} type="submit">
          Разрегистрация ONU
        </button>
      </form>
    </div>
  );
}
