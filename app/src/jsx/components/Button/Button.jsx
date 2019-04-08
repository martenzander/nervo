import styles from "./styles.pcss";
import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<button
				onClick={this.props.onClick}
				className={`${styles.button} ${styles.buttonPrimary}`}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Header;
