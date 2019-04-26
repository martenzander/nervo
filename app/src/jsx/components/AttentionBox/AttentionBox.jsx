import React, { Component } from "react";
import styles from "./styles.pcss";

class AttentionBox extends Component {
	render() {
		const className = `${styles.box} ${styles.margin}`;
		return <p className={className}>{this.props.children}</p>;
	}
}

export default AttentionBox;