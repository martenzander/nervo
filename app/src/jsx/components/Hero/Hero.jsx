import styles from "./styles.pcss";
import React, { Component } from "react";

class Hero extends Component {
	render() {
		return (
			<div className={styles.table}>
				<div className={styles.tableCell}>{this.props.children}</div>
			</div>
		);
	}
}

export default Hero;
