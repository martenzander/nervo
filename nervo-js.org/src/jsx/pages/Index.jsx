import React, { Component } from "react";
import * as Nervo from "./../../../../../nervo";

class App extends Component {
	constructor() {
		super();
		console.log(Nervo);
		// const tween = new Nervo.Tween(
		// 	{ x: 0 },
		// 	{ x: 100 },
		// 	{
		// 		autoStart: true,
		// 		duration: 2,
		// 		loop: true,
		// 		onProgress: e => {
		// 			console.log(e);
		// 		},
		// 	}
		// );
	}

	render() {
		return (
			<div className="mesh-container">
				<div className="mesh-void">
					hi
					{/* <h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul> */}
				</div>
			</div>
		);
	}
}

export default App;
