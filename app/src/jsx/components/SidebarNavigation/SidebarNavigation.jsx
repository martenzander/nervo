import styles from "./styles.pcss";
import React, { Component } from "react";
const Link = React.lazy(() => import("./../Link/Link"));

class SidebarNavigation extends Component {
	constructor(props) {
		super(props);
		this.sections = props.sections;
		this.state = {
			scrollPos: window.scrollY,
		};
	}

	onScroll = e => {
		this.setState({ scrollPos: window.scrollY });
	};

	onResize = e => {
		this.setState({ scrollPos: window.scrollY });
	};

	componentDidMount = e => {
		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("resize", this.onResize);
	};

	componentWillUnmount = e => {
		window.removeEventListener("scroll", this.onScroll);
		window.removeEventListener("resize", this.onResize);
	};

	updateSidebar = e => {};

	render() {
		const items = this.sections.map((s, i) => {
			const sectionNode = document.querySelector(`#${s.key}`);
			const sectionTop = sectionNode.getBoundingClientRect().top;
			const sectionHeight = sectionNode.getBoundingClientRect().height;

			if (sectionTop <= 60 && sectionTop + sectionHeight > 60) {
				return (
					<li key={s.key}>
						<Link component={"sidebar"} isActive={true} value={s.key} target={`#${s.key}`} />
					</li>
				);
			}
			return (
				<li key={s.key}>
					<Link component={"sidebar"} value={s.key} target={`#${s.key}`} />
				</li>
			);
		});
		return <ul className={styles.navigation}>{items}</ul>;
	}
}

export default SidebarNavigation;
