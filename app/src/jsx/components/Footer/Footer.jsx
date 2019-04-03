import styles from "./styles.pcss";
import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer className={`${styles.footer}`}>
				<div className={"nervo-container"}>Footer Here</div>
			</footer>
		);
	}
}

export default Footer;
