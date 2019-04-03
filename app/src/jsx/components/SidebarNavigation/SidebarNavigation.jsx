import styles from "./styles.pcss";
import React, { Component } from "react";

class SidebarNavigation extends Component {
	render() {
		const items = this.props.sections.map((s, i) => {
			const href = `#${s.key}`;
			return (
				<li key={s.key} className={styles.item}>
					<a href={href}>{s.key}</a>
				</li>
			);
		});
		return <ul className={styles.navigation}>{items}</ul>;
	}
}

export default SidebarNavigation;
