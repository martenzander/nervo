import styles from "./styles.pcss";
import React, { Component } from "react";
import GithubRibbon from "./../GithubRibbon/GithubRibbon";

class Hero extends Component {
	render() {
		return (
			<div className={`${styles.this} js-hero`}>
				<div className={`${styles.table}`}>
					<div className={`${styles.tableCell}`}>{this.props.children}</div>
				</div>
			</div>
		);
	}
}

export default Hero;
