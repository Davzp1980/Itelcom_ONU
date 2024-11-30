import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/formData/formdataReducer";

export default function Header() {
  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showModal(true));
  }
  return (
    <div className={css.div}>
      <img className={css.logo} src="/logo_itelkom.png" alt="Itelkom logo" />
      <nav className={css.nav}>
        <NavLink className={activeLink} to="/">
          Главная
        </NavLink>
        <NavLink className={activeLink} to="/register-onu">
          Регистрация ОНУ
        </NavLink>
        <NavLink className={activeLink} to="/register-onu-switch">
          Регистрация ОНУ + Switch
        </NavLink>
        <NavLink className={activeLink} to="/unregister-onu">
          Разрегистрация ОНУ
        </NavLink>
        <NavLink className={activeLink} to="/check-onu">
          Проверка ОНУ
        </NavLink>
        <NavLink className={activeLink} to="/reload-onu">
          Перезагрузка ОНУ
        </NavLink>
        <NavLink className={activeLink} to="/add-dhcp">
          Добавить DHCP
        </NavLink>
      </nav>
      <button className={css.button} type="button" onClick={handleClick}>
        <svg width="24" height="24">
          <use href="/icons.svg#icon-burger"></use>
        </svg>
      </button>
    </div>
  );
}
