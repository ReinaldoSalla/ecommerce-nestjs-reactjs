import React from "react";
import ReactDOM from "react-dom";

export default class Interface extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}

	componentDidMount() {
		return fetch("https://reactnative.dev/movies.json")
			.then(res => res.json())
			.then(data => {
				this.setState({
					isLoading: false,
					title: data.title,
					description: data.title,
					movies: data.movies
				})
			})
			.catch(err => console.error(err));
	}

	render() {
		if(this.state.isLoading) {
			return (
				<div>Loading</div>
			)
		} else {
			return (
				<div> 
					first movie: {this.state.movies[0].title} <br />
					second movie: {this.state.movies[1].title}
				</div>
			)
		}
	}
}

ReactDOM.render(
	<Interface />,
	document.getElementById("root")
);

