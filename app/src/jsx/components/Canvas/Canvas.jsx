import styles from "./styles.pcss";
import React, { Component } from "react";

class Canvas extends Component {
	componentDidMount() {
		this.canvasDrawer = new this.props.value.default(this.node);
	}

	refCallback = e => {
		this.node = e;
	};

	render() {
		return (
			<div className={`${styles.aspectRatio} ${styles.margin}`}>
				<canvas className={`${styles.canvas}`} ref={this.refCallback} />
			</div>
		);
	}
}

export default Canvas;
