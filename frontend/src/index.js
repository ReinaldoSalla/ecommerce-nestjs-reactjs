import React from "react";
import ReactDOM from "react-dom";
import Getter from "./components/get";
import Poster from "./components/post";
import Deleter from "./components/delete";

export default class Interface extends React.Component {
	render() {
		return (
			<div>
				<Getter />
				<Poster />
				<Deleter />
			</div>
		)
	}
}

ReactDOM.render(
	<Interface />,
	document.getElementById("root")
);
