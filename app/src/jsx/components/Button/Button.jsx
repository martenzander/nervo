import styles from "./styles.pcss";
import React, { Component } from "react";

class Header extends Component {
	render() {
		const classes = this.props.primary
			? `${styles.button} ${styles.buttonPrimary}`
			: `${styles.button} ${styles.buttonSecondary}`;

		if (!this.props.href) {
			return (
				<button onClick={this.props.onClick} className={classes}>
					{this.props.children}
				</button>
			);
		}
		return (
			<a href={this.props.href} className={classes}>
				{this.props.children}
			</a>
		);
	}
}

export default Header;
