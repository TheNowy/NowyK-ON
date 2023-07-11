import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DropDownMenu from "../../wrapper/header/DropDownMenu/DropDown";
import scss from "./Header.module.scss";

export const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  const activeLink = ({ isActive }) => {
    return {
      border: isActive ? "solid 1px white" : "none",
      color: isActive ? "white" : "white",
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        // Скролл вниз
        setScrollDirection("down");
      } else {
        // Скролл вверх
        setScrollDirection("up");
      }

      setPrevScrollY(currentScrollY);

      if (currentScrollY >= 10 && scrollDirection === "down") {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, scrollDirection]);

  return (
    <nav className={scss.nav}>
      <header
        className={
          headerScroll ? `${scss.header} ${scss.active}` : `${scss.header}`
        }
      >
        <NavLink to="/" className={scss.logo}>
          Nowy
        </NavLink>
        <div className={scss.header_wrap}>
          <NavLink
            to="/"
            className={
              headerScroll
                ? `${scss.link} ${scss.activeLinks}`
                : `${scss.link}`
            }
            style={activeLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/contacts"
            className={
              headerScroll
                ? `${scss.link} ${scss.activeLinks}`
                : `${scss.link}`
            }
            style={activeLink}
          >
            Contact
          </NavLink>
          <div
            className={scss.burger_menu}
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      {openProfile && <DropDownMenu />}
    </nav>
  );
};
