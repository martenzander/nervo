import styles from "./styles.pcss";
import React, { Component } from "react";

class Canvas extends Component {
	constructor(props) {
		super(props);
	}

	onScroll = e => {
		this.setCanvasSize();
	};

	onResize = e => {
		this.setCanvasSize();
	};

	setCanvasSize = e => {
		const style = window.getComputedStyle(this.node);
		const width = style.width;
		const height = style.height;
		this.node.setAttribute("width", width.replace("px", ""));
		this.node.setAttribute("height", height.replace("px", ""));
	};

	componentDidMount() {
		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("resize", this.onResize);
		this.setCanvasSize();
		this.canvasDrawer = new this.props.value.default(this.node);
	}

	componentWillUnmount = e => {
		window.removeEventListener("scroll", this.onScroll);
		window.removeEventListener("resize", this.onResize);
	};

	refCallback = e => {
		this.node = e;
	};

	render() {
		return (
			<div className={`${styles.aspectRatio}`}>
				<canvas className={`${styles.canvas}`} ref={this.refCallback} />
			</div>
		);
	}
}

export default Canvas;
