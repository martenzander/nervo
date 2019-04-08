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

		switch (this.props.type) {
			case "h1":
				return <h1 className={`${styles.h1}`}>{ReactHtmlParser(this.props.value)}</h1>;
				break;
			case "h2":
				return <h2 className={`${styles.h2}`}>{ReactHtmlParser(this.props.value)}</h2>;
				break;
			case "h3":
				return <h3 className={`${styles.h1}`}>{ReactHtmlParser(this.props.value)}</h3>;
				break;
			default:
				return <p className={`${styles.h1}`}>no headline type defined</p>;
				break;
		}
	}
}

export default Copy;
