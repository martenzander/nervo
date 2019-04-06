import styles from "./styles.pcss";
import React, { Component } from "react";
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from "react-html-parser";

class Copy extends Component {
	render() {
		const classNames = `${styles.font} ${styles.margin}`;
		return <p className={classNames}>{new ReactHtmlParser(this.props.value)}</p>;
	}
}

export default Copy;
