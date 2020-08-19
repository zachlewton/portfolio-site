import React, { Component, useState, props } from "react";
import { Link } from "react-router-dom";
import style from "./SideNav.module.css";
import Burger from "react-css-burger";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopyAlert from "../CopyAlert/CopyAlert";

export default function SideNav(props) {
  const [hidden, sethidden] = useState(true);
  const [socialHidden, setSocialHidden] = useState(true);
  const [coppied, setCoppied] = useState(false);

  const [popup, showPopup] = useState(false);

  const raiseCopy = () => {
    showPopup(true);
    setTimeout(() => {
      showPopup(false);
    }, 2000);
  };

  //   const [active, setActive] = useState(true);

  return (
    <div>
      {popup && <CopyAlert />}
      <nav className={style.sideNav}>
        <div className={style.name}></div>
        <ul className={style.navList}>
          <Link onClick={props.navClick} to="/">
            <li className={style.navItem}>Home</li>
          </Link>
          <div>
            <li
              className={style.navItem}
              onClick={hidden ? () => sethidden(false) : () => sethidden(true)}
            >
              Art/Design
            </li>
            {hidden ? null : (
              <div className={style.subNav}>
                <Link to="/illustration">
                  <li onClick={props.navClick} className={style.subNavItem}>
                    Illustration
                  </li>
                </Link>
                <Link to="/graphicDesign">
                  <li onClick={props.navClick} className={style.subNavItem}>
                    Graphic Design
                  </li>
                </Link>
                <Link to="/other">
                  <li onClick={props.navClick} className={style.subNavItem}>
                    Other
                  </li>
                </Link>
              </div>
            )}
          </div>
          <Link to="/animation">
            <li onClick={props.navClick} className={style.navItem}>
              Animation
            </li>
          </Link>
          <Link to="/film">
            <li onClick={props.navClick} className={style.navItem}>
              Film
            </li>
          </Link>
          <Link to="/about">
            <li onClick={props.navClick} className={style.navItem}>
              About
            </li>
          </Link>

          <div>
            <li
              className={style.navItem}
              onClick={
                socialHidden
                  ? () => setSocialHidden(false)
                  : () => setSocialHidden(true)
              }
            >
              Contact
            </li>
            {socialHidden ? null : (
              <div className={style.socialNav}>
                <a
                  href="https://www.instagram.com/crabwithpencil/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>

                <CopyToClipboard text={"abbyhanlee@gmail.com"}>
                  <a className={style.email} href={null}>
                    <AiOutlineMail onClick={raiseCopy} />
                  </a>
                </CopyToClipboard>

                <a
                  href="https://www.linkedin.com/in/abby-lee-5672b5160/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}
