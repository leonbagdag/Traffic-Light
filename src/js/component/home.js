import React from "react";
import ReactDOM from "react-dom";

//create your first component
export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			click: null
		};
	}

	render() {
		let red = "";
		let yellow = "";
		let green = "";

		switch (this.state.click) {
			case "red":
				red = "selected";
				break;
			case "yellow":
				yellow = "selected";
				break;
			case "green":
				green = "selected";
				break;
		}

		return (
			<div>
				<div id="TrafficTop" />
				<div id="container">
					<div
						className={"red light " + red}
						onClick={() => this.setState({ click: "red" })}
					/>
					<div
						className={"yellow light " + yellow}
						onClick={() => this.setState({ click: "yellow" })}
					/>
					<div
						className={"green light " + green}
						onClick={() => this.setState({ click: "green" })}
					/>
				</div>
			</div>
		);
	}
}
