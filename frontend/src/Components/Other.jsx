import React, { Component } from "react";
import axios from "axios";
import Post from "./Post/Post";
import style from "./posts/Posts.module.css";
import Loading from "./Loading/Loading.jsx";

export default class Other extends Component {
  state = {
    posts: [],
    isLoaded: false,
    category: "",
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/posts?categories=5")
      .then((res) => {
        const postsArray = [];
        res.data.map((post) => {
          console.log(post);

          postsArray.push(post);
        });

        this.setState({
          posts: postsArray,
          isLoaded: true,
        });
      })
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
