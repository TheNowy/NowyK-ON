import React, { useEffect, useState } from "react";
import scss from "./DropDown.module.scss";
import { NavLink } from "react-router-dom";

const DropDown = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  const activeLink = ({ isActive }) => {
    return {
      border: isActive ? "solid 1px #4d01ff" : "none",
    };
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
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={headerScroll ? `${scss.DropDownMenu} ${scss.active}` : `${scss.DropDownMenu}`}>
      <ul className={`${scss.gap_4}`}>
        <NavLink to="/" className={`${scss.link}`} style={activeLink}>
          Home
        </NavLink>
        <NavLink to="/blog" className={`${scss.link}`} style={activeLink}>
          Blog
        </NavLink>
        <NavLink to="/contacts" className={`${scss.link}`} style={activeLink}>
          Contact
        </NavLink>
        <NavLink to="https://cloud.mail.ru/public/Kv1A/oYjpkqoqX" className={`${scss.link}`}>
          Quick View
        </NavLink>
        <NavLink to="https://cloud.mail.ru/public/Kv1A/oYjpkqoqX" className={`${scss.link}`}>
          Download
        </NavLink>
        <NavLink
          to="https://github.com/NowyTeam"
          className={`${scss.gitlink} ${scss.activeLink}`}>
          GitHub
        </NavLink>
      </ul>
    </div>
  );
};

export default DropDown;

