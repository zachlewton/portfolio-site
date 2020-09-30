import React, { Component } from "react";
import axios from "axios";
import style from "./Post.module.css";
import Video from "../video/Video.jsx";

export default class Post extends Component {
  state = {
    imgUrl: "",
  };
  componentDidMount() {
    const getImgUrl = axios.get(
      `https://www.portfolioabby.com/wp-json/wp/v2/media/${this.props.imageSrc}`
    );
    Promise.all([getImgUrl]).then((res) => {
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
      });
    });
  }

  render() {
    return (
      <div className={style.post}>
        {!this.props.categories[1] ? (
          <img className={style.image} src={this.state.imgUrl} />
        ) : (
          <Video url={this.props.url} />
        )}

        <div className={style.header}>
          <h1 className={style.title}>{this.props.title}</h1>
          <div
            className={style.subtitle}
            dangerouslySetInnerHTML={{ __html: this.props.subtitle }}
          />
        </div>
        <div
          className={style.description}
          dangerouslySetInnerHTML={{ __html: this.props.description }}
        />
      </div>
    );
  }
}
