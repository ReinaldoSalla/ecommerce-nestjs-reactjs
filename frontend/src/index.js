import React from "react";
import ReactDOM from "react-dom";
import Getter from "./components/get";
import Poster from "./components/post";
import Updater from "./components/patch";
import Deleter from "./components/delete";

export default class Interface extends React.Component {
	render() {
		return (
			<div>
				<Getter />
				<Poster />
				<Updater />
				<Deleter />
				<img src={require("./assets/car.jpg")} />
			</div>
		)
	}
}

ReactDOM.render(
	<Interface />,
	document.getElementById("root")
);
