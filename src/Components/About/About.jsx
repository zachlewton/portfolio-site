import React, { Component } from "react";
import axios from "axios";
import style from "./About.module.css";
export class About extends Component {
  render() {
    return (
      <div className={style.about}>
        <p>
          Abby is a person in New York who makes films, music, and is not the
          same Abby Lee that stars in Dance Moms. She enjoys comedy, and
          offering commentary about many things—entertainment, politics, arts &
          culture. Mmm, how fresh! Her laptop is running out of space because
          she has too many random files and Glee songs in the iTunes library.
        </p>
        <p>
          She is proficient in Adobe Premiere, Photoshop, InDesign as well as a
          variety of other computer apps. Technologically, she is very sound.
        </p>
      </div>
    );
  }
}

export default About;
