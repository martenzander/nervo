import React, { Component } from "react";
import styles from "./styles.pcss";

class GithubRibbon extends Component {
	render() {
		return (
			<a href={"https://github.com/SlimMarten/nervo"} target={"_blank"}>
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
