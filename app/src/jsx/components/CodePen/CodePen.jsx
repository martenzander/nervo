import styles from "./styles.pcss";
import React, { Component } from "react";

class CodePen extends Component {
	render() {
		const classNames = `${styles.margin}`;
		return (
			<div className={classNames}>
				<iframe
					height={500}
					style={{ width: "100%" }}
					scrolling={"no"}
					title={"Nervo"}
					src={this.props.value}
					frameBorder={"no"}
					allowFullScreen={true}
				/>
			</div>
		);
	}
}

export default CodePen;
