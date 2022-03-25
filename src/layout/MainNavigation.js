import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Administrador</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Facturas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-customer"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Agregar Cliente
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
