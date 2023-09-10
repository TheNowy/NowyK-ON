import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DropDownMenu from "../../wrapper/header/DropDownMenu/DropDown";

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';

import scss from "./Header.module.scss";

export const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  const activeLink = ({ isActive }) => {
    return {};
  };

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    -window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={scss.nav}>
      <header
        className={
          headerScroll ? `${scss.header} ${scss.active}` : `${scss.header}`
        }>
        <NavLink to="/" className={scss.logo}>
          <img
            className={
              headerScroll ? `${scss.image_active} ${scss.active}` : `${scss.image_active}`
            }
            src="../../../../murasOrig.png"
            alt=""
          />
          <img
            src="../../../../muraswhite.png"
            alt=""
            className={
              headerScroll ? `${scss.image} ${scss.active}` : `${scss.image}`
            }
          />
          <h1
            className={
              headerScroll ? `${scss.h1} ${scss.active}` : `${scss.h1}`
            }>
            Muras
          </h1>
        </NavLink>
        <div className={scss.header_wrap}>
          <NavLink
            to="/"
            className={
              headerScroll ? `${scss.link} ${scss.activeLinks}` : `${scss.link}`
            }
            style={activeLink}>
          <SupportAgentIcon/> Поддержка
          </NavLink>
          <NavLink
            to="/"
            className={
              headerScroll ? `${scss.link} ${scss.activeLinks}` : `${scss.link}`
            }
            style={activeLink}>
            <LocalMallIcon/> Купить
          </NavLink>
          <NavLink to="/" className={scss.cabinet}>
          <LoginIcon/>  Авторизация
            </NavLink>
          <div
            className={scss.burger_menu}
            onClick={() => setOpenProfile((prev) => !prev)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      {openProfile && <DropDownMenu />}
    </nav>
  );
};
