import styles from "./styles.pcss";
import React, { Component } from "react";

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
		};
	}
	refCallback = e => {
		this.node = e;
	};

	onScroll = e => {
		this.updateProgress(e);
	};

	onResize = e => {
		this.updateProgress(e);
	};

	componentDidMount = e => {
		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("resize", this.onResize);
		this.main = document.querySelector(".js-main-content");
		this.header = document.querySelector("header");
	};

	componentWillUnmount = e => {
		window.removeEventListener("scroll", this.onScroll);
		window.removeEventListener("resize", this.onResize);
	};

	updateProgress = e => {
		this.mainHeight = this.main.getBoundingClientRect().height;
		this.mainTop = this.main.getBoundingClientRect().top;
		this.headerHeight = this.header.getBoundingClientRect().height;

		this.setState({
			progress:
				Math.abs(this.mainTop - this.headerHeight) / (this.mainHeight - window.innerHeight),
		});
	};

	render() {
		return (
			<div className={`${styles.this}`}>
				{this.mainTop < this.headerHeight ? (
					<div
						className={`${styles.progress}`}
						ref={this.refCallback}
						style={{ transform: `scaleX(${this.state.progress})` }}
					/>
				) : (
					<div className={`${styles.progress}`} ref={this.refCallback} />
				)}
			</div>
		);
	}
}

export default ProgressBar;
