import React, { Component } from "react";
import MoveTo from "moveto";

class InpageAnchors extends Component {
	refCallback = e => {
		this.node = e;
	};

	componentDidMount = e => {
		setTimeout(e => {
			this.anchors = Array.from(this.node.querySelectorAll("a"));
			this.anchors.map(a => {
				const href = a.getAttribute("href");
				if (href !== null && href.charAt(0) === "#") {
					a.addEventListener("click", InpageAnchors.onClick);
				}
				return a;
			});
		}, 100);
	};

	static onClick = e => {
		const key = e.currentTarget.getAttribute("href");
		if (key.charAt(0) !== "#") return;
		e.preventDefault();
		const partner = document.querySelector(key);
		let scrollTarget = partner.getBoundingClientRect().top;
		const mainPaddingTop = window
			.getComputedStyle(document.querySelector(".js-main-content"))
			.paddingTop.replace("px", "");
		const headerHeight = document.querySelector(".js-header").getBoundingClientRect().height;
		// scrollTarget -= headerHeight + parseInt(mainPaddingTop);
		scrollTarget -= parseInt(mainPaddingTop);

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
		return <div ref={this.refCallback}>{this.props.children}</div>;
	}
}

export default InpageAnchors;
