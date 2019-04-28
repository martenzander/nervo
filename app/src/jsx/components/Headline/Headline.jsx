import styles from "./styles.pcss";
import React, { Component } from "react";
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from "react-html-parser";

class Headline extends Component {
	render() {
		const classNames = `${styles.font}`;

		switch (this.props.type) {
			case "h1":
				return <h1 className={`${styles.h1}`}>{ReactHtmlParser(this.props.value)}</h1>;
				break;
			case "h2":
				return <h2 className={`${styles.h2}`}>{ReactHtmlParser(this.props.value)}</h2>;
				break;
			case "h3":
				return <h3 className={`${styles.h3}`}>{ReactHtmlParser(this.props.value)}</h3>;
				break;
			case "h4":
				return <h4 className={`${styles.h4}`}>{ReactHtmlParser(this.props.value)}</h4>;
				break;
			case "h5":
				return <h5 className={`${styles.h5}`}>{ReactHtmlParser(this.props.value)}</h5>;
				break;
			default:
				return <p className={`${styles.h1}`}>no headline type defined</p>;
				break;
		}
	}
}

export default Headline;
