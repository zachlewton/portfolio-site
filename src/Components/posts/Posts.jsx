import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import style from './Posts.module.css';
import Loading from '../Loading/Loading';

import FadeIn from 'react-fade-in';

export class Posts extends Component {
	state = {
		posts: [],
		isLoaded: false,
		category: '',
	};

	componentDidMount() {
		axios
			.get('https://www.portfolioabby.com/wp-json/wp/v2/posts?per_page=100')
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

		if (isLoaded) {
			return (
				<div className={style.flexContainer}>
					{posts.map((post) => (
						<FadeIn transitionDuration={900} delay={300}>
							<Post
								title={post.title.rendered}
								description={post.content.rendered}
								subtitle={null}
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

export default Posts;
