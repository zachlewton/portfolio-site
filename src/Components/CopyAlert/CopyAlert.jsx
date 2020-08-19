import React, { Component } from "react";
import style from "./CopyAlert.module.css";

export default class CopyAlert extends Component {
  render() {
    return <div className={style.alert}>Copied to clipboard</div>;
  }
}
