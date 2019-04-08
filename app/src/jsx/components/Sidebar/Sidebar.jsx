import styles from "./styles.pcss";
import React, { Component, Suspense } from "react";

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.stickyPadding = 60;
		this.isFixed = false;
		this.stickyLimit = null;
		this.className = styles.sidebar;
	}

	refCallback = e => {
		this.node = e;
	};

	onScroll = e => {
		this.setState({
			scroll: window.scrollY,
		});
	};

	onResize = e => {
		this.setState({
			scroll: window.scrollY,
		});
	};

	componentDidMount = e => {
		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("resize", this.onResize);
		this.main = document.querySelector(".js-main-content");
		this.header = document.querySelector("header");
	};

	componentWillUnmount = e => {
		window.removeEventListener("scroll", this.onScroll);
		window.removeEventListener("resize", this.onResize);
	};

	getWidth = e => {
		const parentPadding = window.getComputedStyle(this.node.parentElement)["padding-left"];

		return (
			parseFloat(this.node.parentElement.getBoundingClientRect().width) -
			parseFloat(parentPadding.substring(0, parentPadding.length - 2)) * 2
		);
	};

	updateSideBar = e => {
		if (!this.main) return;
		this.mainPaddingTop = parseInt(
			window.getComputedStyle(this.main).paddingTop.replace("px", "")
		);
		this.mainTop = this.main.getBoundingClientRect().top;
		this.mainHeight = this.main.getBoundingClientRect().height;
		this.mainBottom = this.mainHeight - Math.abs(this.mainTop);
		this.headerHeight = this.header.getBoundingClientRect().height;
		this.height = this.node.getBoundingClientRect().height;
		this.width = this.getWidth();

		if (this.isFixed) {
			this.stickyLimit = this.headerHeight + this.mainPaddingTop + this.height;
		}

		if (this.mainTop <= 60 && this.mainBottom >= this.stickyLimit) {
			this.sidebarInlineStyles = {
				width: `${this.width}px`,
				top: `${this.headerHeight + this.mainPaddingTop}px`,
			};
			if (this.isFixed) return;
			this.className = `${styles.sidebar} ${styles.fixed}`;
			this.isFixed = true;
		} else {
			if (!this.isFixed) return;
			if (this.mainTop >= 0) {
				this.node.parentElement.style.verticalAlign = "top";
			} else {
				this.node.parentElement.style.verticalAlign = "bottom";
			}
			this.sidebarInlineStyles = {};
			this.className = `${styles.sidebar}`;
			this.isFixed = false;
		}
	};

	render() {
		this.updateSideBar();

		return (
			<aside
				className={this.className}
				ref={this.refCallback}
				style={this.sidebarInlineStyles}
			>
				{this.props.children}
			</aside>
		);
	}
}

export default Sidebar;
