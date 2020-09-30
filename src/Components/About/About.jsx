import React, { Component } from "react";
import axios from "axios";
import style from "./About.module.css";
import FadeIn from "react-fade-in";
export class About extends Component {
  render() {
    return (
      <FadeIn transitionDuration={900} delay={300}>
        <div className={style.about}>
          <p>
            Abby is a person in New York who makes films, music, and is not the
            same Abby Lee that stars in Dance Moms. She enjoys comedy, and
            offering commentary about many things—entertainment, politics, arts
            & culture. Mmm, how fresh! Her laptop is running out of space
            because she has too many random files and Glee songs in the iTunes
            library.
          </p>
          <p>
            She is proficient in Adobe Premiere, Photoshop, InDesign as well as
            a variety of other computer apps. Technologically, she is very
            sound.
          </p>
        </div>
      </FadeIn>
    );
  }
}

export default About;
