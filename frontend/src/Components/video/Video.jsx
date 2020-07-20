import React, { Component } from "react";
import style from "./Video.module.css";

export default function Video(props) {
  return (
    <div className={style.iframeContainer}>
      <iframe
        src={props.url}
        frameborder="0"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        mute="1"
      />
    </div>
  );
}
