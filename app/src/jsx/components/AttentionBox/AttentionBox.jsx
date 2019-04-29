import React, { Component } from "react";
import styles from "./styles.pcss";
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from "react-html-parser";

class AttentionBox extends Component {
	render() {
		const className = `${styles.box} ${styles.margin}`;
		return <p className={className}>{new ReactHtmlParser(this.props.children)}</p>;
	}
}

export default AttentionBox;
