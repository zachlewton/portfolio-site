import React, { Component } from "react";
import axios from "axios";
import Post from "./Post/Post";
import style from "./posts/Posts.module.css";
import Loading from "./Loading/Loading.jsx";
import FadeIn from "react-fade-in";

export default class Other extends Component {
  state = {
    posts: [],
    isLoaded: false,
    category: "",
  };

  componentDidMount() {
    axios
      .get("https://www.portfolioabby.com/wp-json/wp/v2/posts?categories=5")
      .then((res) => {
        const postsArray = [];
        res.data.map((post) => {
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

    if (isLoaded) {
      return (
        <div className={style.flexContainer}>
          {posts.map((post) => (
            <FadeIn transitionDuration={900} delay={300}>
              <Post
                title={post.title.rendered}
                description={post.content.rendered}
                subtitle={post.acf.subtitle}
                imageSrc={post.featured_media}
                key={post.id}
                categories={post.categories}
                url={post.acf.video}
              />
            </FadeIn>
          ))}
        </div>
      );
    }

    return null;
  }
}
