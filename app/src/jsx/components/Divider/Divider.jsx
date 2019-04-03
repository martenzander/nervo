import styles from "./styles.pcss";
import React, { Component } from "react";

class Divider extends Component {
	render() {
		const className = `${styles.base}`;
		return <hr className={className} />;
	}
}

export default Divider;
