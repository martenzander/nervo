import React, { Component } from "react";
import styles from "./styles.pcss";
const data = require("./../../../data/index").default;

class GithubRibbon extends Component {
	render() {
		return (
			<a href={data.repository.url.replace("git+", "")} target={"_blank"}>
				<img
					className={styles.ribbon}
					src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
					alt="Fork me on GitHub"
				/>
			</a>
		);
	}
}

export default GithubRibbon;
