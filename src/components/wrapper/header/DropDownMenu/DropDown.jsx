import React, { useEffect, useState } from "react";
import scss from "./DropDown.module.scss";
import { NavLink } from "react-router-dom";

const DropDown = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  const activeLink = ({ isActive }) => {
    return {
      border: isActive ? "solid 1px white" : "none",
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
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
    <div className={headerScroll ? `${scss.DropDownMenu} ${scss.active}` : `${scss.DropDownMenu}`}>
      <ul className={`${scss.gap_4}`}>
        <NavLink to="/" className={`${scss.link}`} style={activeLink}>
          Home
        </NavLink>
        <hr />
        <NavLink to="/contacts" className={`${scss.link}`} style={activeLink}>
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default DropDown;

