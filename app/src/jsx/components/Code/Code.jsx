import styles from "./styles.scss";
import React, { Component } from "react";

import Prism from "prismjs";

class Code extends Component {
	constructor(props) {
		super(props);

		this.codeBlocks = props.value.map((block, i) => {
			return (
				<pre
					key={i}
					className={`${styles["border-radius"]} ${block.isCommand ? "command-line" : "line-numbers"}`}
					data-prompt={"$"}
					data-src={`./sources/${block.source}`}
				/>
			);
		});
	}
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return <div>{this.codeBlocks}</div>;
	}
}

export default Code;
