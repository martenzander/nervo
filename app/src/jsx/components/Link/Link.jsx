import React, { Component } from "react";
import MoveTo from "moveto";

class Link extends Component {
	onClick = e => {
		const key = e.currentTarget.getAttribute("href");
		if (key.charAt(0) !== "#") return;
		e.preventDefault();
		const partner = document.querySelector(key);
		const scrollTarget = partner.getBoundingClientRect().top;

		if (scrollTarget !== 0) {
			const move = new MoveTo({
				duration: 750,
			});
			move.move(scrollTarget);
		}
	};

	render() {
		return (
			<a onClick={this.onClick} href={this.props.target}>
				{this.props.value}
			</a>
		);
	}
}

export default Link;
