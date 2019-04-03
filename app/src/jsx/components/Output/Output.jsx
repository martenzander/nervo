import styles from "./styles.pcss";
import React, { Component } from "react";

class Output extends Component {
	render() {
		return <div className={styles.test}>{this.props.value}</div>;
	}
}

export default Output;
