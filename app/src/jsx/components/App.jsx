import React, { Component } from "react";
import Output from "./Output";
import Divider from "./Divider";
import GithubRibbon from "./GithubRibbon";
import Sidebar from "./Sidebar";
import * as Nervo from "../../../../src/js/index";
import Prism from "prismjs";
const data = require("./../../data/data.js").default;
import styles from "./../../scss/components/app.scss";

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
				// loop: true,
				onProgress: e => {
					this.setState({ ...{}, ...e.target.value });
				},
			}
		);
	}

	componentDidMount() {
		this.tween.start();
		Prism.highlightAll();
	}

	render() {
		const sections = data.sections.map((s, i) => {
			s.id = i;
			return <div key={s.name}>{s.name}</div>;
		});

		return (
			<div className="app">
				<GithubRibbon />
				<div className={styles["mesh-container"]}>
					{sections}
					<div className={styles["mesh-void"]}>
						<div
							className={`${styles["mesh-column-9"]} ${styles["mesh-column-sm-9"]} ${styles["mesh-column-md-9"]} ${
								styles["mesh-column-lg-9"]
							}`}
						>
							<Output value={this.state.value} />
							{/* <pre className="language-javascript line-numbers" data-src="./sources/test.js"> */}
							<pre data-src="./sources/test.js">{/* <code className="language-css" /> */}</pre>
						</div>
						<div
							className={`${styles["mesh-column-3"]} ${styles["mesh-column-sm-3"]} ${styles["mesh-column-md-3"]} ${
								styles["mesh-column-lg-3"]
							}`}
						>
							<Sidebar sections={sections} />
						</div>
					</div>
					<Divider />
				</div>
			</div>
		);
	}
}

export default App;
