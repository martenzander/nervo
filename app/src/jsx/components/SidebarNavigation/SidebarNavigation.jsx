import styles from "./styles.pcss";
import React, { Component } from "react";
import SectionSpyNavigation from "./../SectionSpyNavigation/SectionSpyNavigation";

class SidebarNavigation extends Component {
	render() {
		return (
			<div className={"sidebarnavigation"}>
				<SectionSpyNavigation
					sections={this.props.sections}
					ul={styles.ul}
					a={styles.a}
					active={styles.aActive}
				/>
			</div>
		);
	}
}

export default SidebarNavigation;
