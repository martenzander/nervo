import styles from "./styles.pcss";
import React, { Component } from "react";
import MoveTo from "moveto";

class Link extends Component {
	onClick = e => {
		const key = e.currentTarget.getAttribute("href");
		if (key.charAt(0) !== "#") return;
		e.preventDefault();
		const partner = document.querySelector(key);
		let scrollTarget = partner.getBoundingClientRect().top;
		scrollTarget -= 60;

		if (scrollTarget !== 0) {
			const move = new MoveTo(
				{
					tolerance: 0,
					duration: 750,
					easing: "easeInOutQuad",
				},
				{
					easeInOutQuad: (t, b, c, d) => {
						t /= d / 2;
						if (t < 1) return (c / 2) * t * t + b;
						t--;
						return (-c / 2) * (t * (t - 2) - 1) + b;
					},
				}
			);
			move.move(scrollTarget);
		}
	};

	render() {
		let className;
		switch (this.props.component) {
			case "sidebar":
				if (this.props.isActive) {
					className = `${styles.link} ${styles.sidebar} ${styles.linkActive}`;
				} else {
					className = `${styles.link} ${styles.sidebar}`;
				}
				break;
			default:
				className = `${styles.link}`;
				break;
		}
		return (
			<a className={className} onClick={this.onClick} href={this.props.target}>
				{this.props.value}
			</a>
		);
	}
}

export default Link;
