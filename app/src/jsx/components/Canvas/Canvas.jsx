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
			<div className={`${styles.margin}`}>
				<div className={`${styles.borderRadius}`}>
					<div className={`${styles.aspectRatio}`}>
						<canvas className={`${styles.canvas}`} ref={this.refCallback} />
					</div>
				</div>
			</div>
		);
	}
}

export default Canvas;
