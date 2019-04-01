import styles from "./styles.scss";
import React, { Component } from "react";
import Output from "./../Output/Output";
import GithubRibbon from "./../GithubRibbon/GithubRibbon";
import Section from "./../Section/Section";
import Sidebar from "./../Sidebar/Sidebar";
import Logo from "./../Logo/Logo";
import * as Nervo from "../../../../../src/js/index";
const data = require("./../../../data/index.js").default;

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
	}

	render() {
		const sections = data.sections.map((s, i) => {
			s.id = i;
			return <Section value={s} key={s.name} contents={s.contents} />;
		});

		return (
			<div className="app">
				<GithubRibbon />
				<div className={styles["mesh-container"]}>
					<Logo />

					<div className={styles["mesh-void"]}>
						<div
							className={`${styles["mesh-column-9"]} ${styles["mesh-column-sm-9"]} ${styles["mesh-column-md-9"]} ${
								styles["mesh-column-lg-9"]
							}`}
						>
							{sections}
							<Output value={this.state.value} />
						</div>
						<div
							className={`${styles["mesh-column-3"]} ${styles["mesh-column-sm-3"]} ${styles["mesh-column-md-3"]} ${
								styles["mesh-column-lg-3"]
							}`}
						>
							<Sidebar sections={sections} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
