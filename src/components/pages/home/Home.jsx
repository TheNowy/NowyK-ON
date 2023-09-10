import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";

import scss from "./Home.module.scss";

const Home = () => {
  // const [headerScroll, setHeaderScroll] = useState(false);

  // useEffect(() => {
  //   const changeBackground = () => {
  //     if (typeof window !== "undefined" && window.scrollY >= 10) {
  //       setHeaderScroll(true);
  //     } else {
  //       setHeaderScroll(false);
  //     }
  //   };

  //   changeBackground();
  //   window.addEventListener("scroll", changeBackground);

  //   return () => {
  //     window.removeEventListener("scroll", changeBackground);
  //   };
  // }, []);

  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
              <div className={scss.title}>
                {/* <h1 className={scss.h1_main}>Добро пожаловать в Nowy</h1>
                <h3 className={scss.h3_main}>Лучший сайт по качестве и без рекламы</h3>
                <NavLink to="/news"><button className={scss.button_main}>Смотреть</button></NavLink> */}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
