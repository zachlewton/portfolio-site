import React, { Component } from 'react';
import axios from 'axios';
import style from './About.module.css';
import FadeIn from 'react-fade-in';

import abbyPic from './abbyPic.png';

export class About extends Component {
	render() {
		return (
			<FadeIn transitionDuration={900} delay={300}>
				<div className={style.about}>
					<img alt="pic of artist " src={abbyPic} />
					<p>
						Abby Lee is a Los Angeles-born artist focused on graphic design,
						illustration, and textile arts. She lives in Brooklyn, NY.
					</p>
				</div>
			</FadeIn>
		);
	}
}

export default About;
