import React, { useState } from "react";
import { Link } from "gatsby";
const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="menu container fullWidth  ">
      {/* <div className="logo bold ">MonteOlivo</div> */}
      <Link to="/">
        <img
          width="60px"
          src="/img/logo-transparent.png"
          alt="logo monteolivo funeraria"
        />
      </Link>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="burgerButton button"
      >
        <span />
        <span />
        <span />
      </div>
      {openMenu && (
        <div onClick={() => setOpenMenu(false)} className="openMenu">
          <div className="menuList">
            <Link className="menuItem" to="/">
              Inicio
            </Link>
            <Link className="menuItem noLarge" to="/#services">
              Servicios
            </Link>
            <Link className="menuItem" to="/eco">
              Conoce el servicio ecológico
            </Link>
            <a
              className="menuItem"
              target="_blank"
              href="https://planex.com.bo/obituarios"
            >
              Obituarios
            </a>
            <a
              className="menuItem"
              target="_blank"
              href="https://planex.com.bo/"
            >
              Planes de previsión
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
