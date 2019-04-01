import React, { Component } from "react";
import styles from "./../../scss/components/sidebar.scss";

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const items = this.props.sections.map((s, i) => {
			return <li key={s.key}>{s.key}</li>;
		});
		return <div className={styles.sidebar}>{items}</div>;
	}
}

export default Sidebar;
