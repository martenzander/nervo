import styles from "./styles.pcss";
import React, { Component, Suspense } from "react";
const SidebarNavigation = React.lazy(() => import("./../SidebarNavigation/SidebarNavigation"));

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.sidebar}>
				<Suspense fallback={<div>Loading SidebarNavigation Component</div>}>
					<SidebarNavigation sections={this.props.sections} />
				</Suspense>
			</div>
		);
	}
}

export default Sidebar;
