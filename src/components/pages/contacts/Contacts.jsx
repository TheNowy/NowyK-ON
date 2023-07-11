import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from "./Conctacts.module.scss";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";

const Contacts = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [headerScroll, setHeaderScroll] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const TOKEN = `6201317143:AAFo6tQ_BVQpE5hK2F5f47mkSesKYQRkeo8`;
  const CHAT_ID = "1814654847";
  const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const messageModel = () => {
    let messageTG = `Name: <b>${username}</b>\n`;
    messageTG += `Email: <b>${email}</b>\n`;
    messageTG += `Message: <b>${message}</b>\n`;

    return messageTG;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(),
      });
      setAlertMessage(
        "Сообщение успешно отправлено , ожидайте ответа в течении дня"
      );
      setUsername("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(
        "Ошибка при отправке сообщения, вероятно сервера выключены или находятся в разработке",
        error
      );
      setAlertMessage(
        "Ошибка при отправке сообщения, вероятно сервера выключены или находятся в разработке"
      );
    }
  };

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage("");
    }
  }, [alertMessage]);

  return (
    <>
      <Helmet>
        <title>Nowy - Contacts</title>
      </Helmet>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div
            className={`${scss.home_content} ${
              headerScroll ? scss.active : ""
            }`}>
              <div
                className={`${scss.gif_image} ${
                  headerScroll ? scss.active : ""
                }`}>
                <h1 className={scss.h1}>Contact Me</h1>
              </div>
              <form
                className={`${scss.form} ${headerScroll ? scss.active : ""}`}
                onSubmit={handleSubmit}>
                <label
                  className={`${scss.label} ${headerScroll ? scss.active : ""}`}
                  htmlFor="name">
                  Name
                  <input
                    id="name"
                    className={`${scss.input} ${
                      headerScroll ? scss.active : ""
                    }`}
                    type="text"
                    placeholder="Nowy"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
                <label
                  className={`${scss.label} ${headerScroll ? scss.active : ""}`}
                  htmlFor="email">
                  Email
                  <input
                    id="email"
                    className={`${scss.input} ${
                      headerScroll ? scss.active : ""
                    }`}
                    type="email"
                    placeholder="nowy@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label
                  className={`${scss.label} ${headerScroll ? scss.active : ""}`}
                  htmlFor="comment">
                  Message
                  <textarea
                    id="comment"
                    className={`${scss.message} ${
                      headerScroll ? scss.active : ""
                    }`}
                    value={message}
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                    required></textarea>
                </label>

                <button type="submit" className={scss.button}>
                  Submit
                </button>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
