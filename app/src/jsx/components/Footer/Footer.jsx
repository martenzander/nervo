import styles from "./styles.pcss";
import React, { Component } from "react";
import Logo from "./../Logo/Logo";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.date = new Date();
	}

	render() {
		return (
			<footer className={`${styles.footer}`}>
				<div className={"nervo-container"}>
					<div className={styles.logoMargin}>
						<Logo />
					</div>
					<p className={styles.font}>
						Developed by Marten Zander © {this.date.getFullYear()}
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
