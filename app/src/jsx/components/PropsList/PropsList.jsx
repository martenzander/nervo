import styles from "./styles.pcss";
import React, { Component } from "react";
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from "react-html-parser";

class PropsList extends Component {
	render() {
		const items = this.props.value.map((item, i) => {
			let copy;

			if (item.copy !== "") {
				copy = <p className={styles.copy}>{new ReactHtmlParser(item.copy)}</p>;
			}
			const headlineClass = item.readonly
				? `${styles.property} ${styles.readonly}`
				: `${styles.property}`;

			return (
				<li id={`${item.key}`} key={i} className={styles.item}>
					<p className={headlineClass}>
						{/* <div className={styles.tableCell}> */}.
						<a href={`#${item.key}`}>{item.name}</a>{" "}
						<span className={styles.value}>{new ReactHtmlParser(item.value)}</span>
						{/* </div> */}
					</p>
					{copy}
				</li>
			);
		});
		return <ul className={styles.list}>{items}</ul>;
	}
}

export default PropsList;
