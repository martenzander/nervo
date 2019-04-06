import styles from "./styles.pcss";
import React, { Component } from "react";
import ProgressBar from "./../ProgressBar/ProgressBar";

class Header extends Component {
	render() {
		return (
			<header className={`${styles.this}`}>
				<div className={"nervo-container"}>
					<div>Nervo</div>
					<div>Navigation</div>
				</div>
				<div className={`${styles.progressBar}`}>
					<ProgressBar />
				</div>
			</header>
		);
	}
}

export default Header;
