import styles from "./styles.pcss";
import React, { Component } from "react";
import Prism from "prismjs";

console.log(styles);

class Code extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);

		this.codeBlocks = props.value.map((block, i) => {
			return (
				<pre
					key={i}
					className={`${block.isCommand ? "command-line" : "line-numbers"}`}
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
		return (
			<div className={`${styles.borderRadius} ${styles.margin} `}>
				<div>
					<ul>
						<li>JavaScript</li>
						<li>JavaScript</li>
					</ul>
				</div>
				<div>
					<div className={styles.voidMargin}>{this.codeBlocks}</div>
				</div>
			</div>
		);
	}
}

export default Code;
