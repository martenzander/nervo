import React, { Component } from "react";
import Output from "./Output";
import * as Nervo from "../../../../src/js/index";
import styles from "./../../scss/app.scss";

class App extends Component {
	state = {
		value: 0,
	};

	constructor(props) {
		super(props);
		this.tween = new Nervo.Tween(
			{ value: 0 },
			{ value: 100 },
			{
				autoStart: false,
				duration: 2,
				loop: true,
				onProgress: e => {
					this.setState({ ...{}, ...e.target.value });
				},
			}
		);
	}

	componentDidMount() {
		this.tween.start();
	}

	render() {
		return (
			<div className="app">
				<div className={styles["mesh-container"]}>
					<div className={styles["mesh-void"]}>
						<div
							className={`${styles["mesh-column-9"]} ${styles["mesh-column-sm-9"]} ${styles["mesh-column-md-9"]} ${
								styles["mesh-column-lg-9"]
							}`}
						>
							<Output value={this.state.value} />
						</div>
						<div
							className={`${styles["mesh-column-3"]} ${styles["mesh-column-sm-3"]} ${styles["mesh-column-md-3"]} ${
								styles["mesh-column-lg-3"]
							}`}
						>
							<Output value={this.state.value} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
