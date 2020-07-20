import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./Nav.module.css";
import logo from "./logo.png";
import CopyAlert from "../CopyAlert/CopyAlert";

export default function Nav() {
  const [hidden, sethidden] = useState(true);
  const [socialHidden, setSocialHidden] = useState(true);
  const [popup, showPopup] = useState(false);

  const raiseCopy = () => {
    showPopup(true);
    setTimeout(() => {
      showPopup(false);
    }, 2000);
  };

  return (
    <div>
      {popup && <CopyAlert />}
      <nav className={style.sideNav}>
        <div className={style.homeButton}>
          <a href=".">
            <div className={style.flexbox}>
              <img className={style.profilePic} src={logo}></img>

              <div className={style.name}>abby lee</div>
            </div>
          </a>
        </div>

        <ul className={style.navList}>
          <div style={{ overflow: "visible" }}>
            <li
              className={style.navItem}
              onClick={hidden ? () => sethidden(false) : () => sethidden(true)}
            >
              Art / Design
            </li>
            {!hidden && (
              <div className={style.subNav}>
                <NavLink
                  activeStyle={{
                    color: "#6d9679",
                  }}
                  to="/illustration"
                >
                  <li className={style.subNavItem}>Illustration</li>
                </NavLink>
                <NavLink
                  activeStyle={{
                    color: "#6d9679",
                  }}
                  to="/graphicDesign"
                >
                  <li className={style.subNavItem}>Graphic Design</li>
                </NavLink>
                <NavLink
                  activeStyle={{
                    color: "#6d9679",
                  }}
                  to="/other"
                >
                  <li className={style.subNavItem}>Other</li>
                </NavLink>
              </div>
            )}

            <div className={style.navGroup}>
              <NavLink
                activeStyle={{
                  color: "#6d9679",
                }}
                exact
                to="/animation"
              >
                <li
                  onClick={() => {
                    sethidden(true);
                  }}
                  className={style.navItem}
                >
                  Animation
                </li>
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "#6d9679",
                }}
                to="/film"
              >
                <li
                  onClick={() => {
                    sethidden(true);
                  }}
                  className={style.navItem}
                >
                  Film
                </li>
              </NavLink>
            </div>

            <div className={style.about}>
              <NavLink
                activeStyle={{
                  color: "#6d9679",
                }}
                to="/about"
              >
                <li
                  onClick={() => {
                    sethidden(true);
                  }}
                  className={style.navItem}
                >
                  About
                </li>
              </NavLink>
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
                      className={style.socialIcon}
                      href="https://www.instagram.com/crabwithpencil/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>

                    <a className={(style.email, style.socialIcon)}>
                      <CopyToClipboard text={"abbyhanlee@gmail.com"}>
                        <AiOutlineMail onClick={raiseCopy} />
                      </CopyToClipboard>
                    </a>

                    <a
                      className={style.socialIcon}
                      href="https://www.linkedin.com/in/abby-lee-5672b5160/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
