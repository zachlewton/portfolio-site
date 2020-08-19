import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";
import style from "./Posts.module.css";
import Loading from "../Loading/Loading";

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false,
    category: "",
  };

  componentDidMount() {
    axios
      .get("wp-json/wp/v2/posts?per_page=100")
      .then((res) =>
        this.setState({
          posts: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { posts, isLoaded } = this.state;
    console.log(this.state);

    if (isLoaded) {
      return (
        <div className={style.flexContainer}>
          {posts.map((post) => (
            <Post
              title={post.title.rendered}
              description={post.content.rendered}
              subtitle={post.acf.subtitle}
              imageSrc={post.featured_media}
              key={post.id}
              categories={post.categories}
              url={post.acf.video}
            />
          ))}
        </div>
      );
    }

    return null;
  }
}

export default Posts;
