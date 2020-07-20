import React, { Component } from "react";
import style from "./Loading.module.css";

export default class Loading extends Component {
  render() {
    return (
      <div className={style.loading}>
        <p>Loading</p>
      </div>
    );
  }
}
