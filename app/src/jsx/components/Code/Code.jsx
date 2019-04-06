import styles from "./styles.pcss";
import React, { Component } from "react";
import Prism from "prismjs";

class Code extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div className={`${styles.borderRadius} ${styles.margin} `}>
				<div className={styles.voidMargin}>
					<pre
						className={`${
							this.props.value.isCommand ? "command-line" : "line-numbers"
						}`}
						data-prompt={"$"}
						data-src={`./sources/${this.props.value.source}`}
					/>
				</div>
			</div>
		);
	}
}

export default Code;
