import { NavLink } from "react-router-dom";
import css from "./Modal_burger.module.css";
import { showModal } from "../../redux/formData/formdataReducer";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
export default function Modal_burger() {
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(showModal(false));
  }
  return (
    <div className={css.div}>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/" onClick={handleOnClick}>
          Главная
        </NavLink>
        <NavLink
          className={css.link}
          to="/register-onu"
          onClick={handleOnClick}
        >
          Регистрация ОНУ
        </NavLink>
        <NavLink
          className={css.link}
          to="/register-onu-switch"
          onClick={handleOnClick}
        >
          Регистрация ОНУ + Switch
        </NavLink>
        <NavLink
          className={css.link}
          to="/unregister-onu"
          onClick={handleOnClick}
        >
          Разрегистрация ОНУ
        </NavLink>
        <NavLink className={css.link} to="/check-onu" onClick={handleOnClick}>
          Проверка ОНУ
        </NavLink>
        <NavLink className={css.link} to="/reload-onu" onClick={handleOnClick}>
          Перезагрузка ОНУ
        </NavLink>
        <NavLink className={css.link} to="/add-dhcp" onClick={handleOnClick}>
          Добавить DHCP
        </NavLink>
      </nav>
      <button className={css.button} type="button" onClick={handleOnClick}>
        <IoMdClose size={30} className={css.closeIcon} />
      </button>
    </div>
  );
}
