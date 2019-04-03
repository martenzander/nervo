import styles from "./styles.pcss";
import React, { Component } from "react";
const Link = React.lazy(() => import("./../Link/Link"));

class SidebarNavigation extends Component {
	render() {
		const items = this.sections.map((s, i) => {
			return (
				<li key={s.key}>
					<Link value={s.key} target={`#${s.key}`} />
				</li>
			);
		});
		return <ul className={styles.navigation}>{items}</ul>;
	}
}

export default SidebarNavigation;
