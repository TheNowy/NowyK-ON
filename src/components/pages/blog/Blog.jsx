import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";
import scss from "./Blog.module.scss";

const Blog = () => {
  return (
    <div className={scss.page_wrapper}>
      <Helmet>
        <title>Nowy - News</title>
      </Helmet>
      <div className={scss.container}>
        <div className={scss.home_content}>
          <div className={scss.blog_title}>
            <div className={scss.title}>
              <h3>Скоро | Soon</h3>
              {/* <p>
                Майлз Моралес отправляется в приключение по мультивселенной
                вместе с Гвен Стейси и новой командой Людей-пауков, которым
                предстоит столкнуться с могущественным злодеем.
              </p> */}
            </div>

            <Link to="/contacts">
              {/* <button className={scss.btn}>
                Get In Touch <span>→</span>
              </button> */}
            </Link>
          </div>
          <Tilt>
            {/* <div className={scss.blog_img}>
              <img
                src="https://avatarfiles.alphacoders.com/161/161381.jpg"
                alt="Logo"
              />
            </div> */}
          </Tilt>
          <div className={scss.blog_title}>
            <div className={scss.title}></div>
          </div>
        </div>
        <div className={scss.succses_projects}></div>
      </div>
    </div>
  );
};

export default Blog;
