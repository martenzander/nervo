import React, { Component } from "react";
import styles from "./../../scss/components/output.scss";

class Output extends Component {
	render() {
		return <div className={styles.test}>{this.props.value}</div>;
	}
}

export default Output;
