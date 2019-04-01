import React, { Component } from "react";

class GithubRibbon extends Component {
	render() {
		return (
			<a href={"https://github.com/SlimMarten/nervo"} target={"_blank"}>
				<img
					style={{ position: "fixed", top: "0", right: "0", border: "0" }}
					src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
					alt="Fork me on GitHub"
				/>
			</a>
		);
	}
}

export default GithubRibbon;
