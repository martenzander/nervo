import styles from "./styles.pcss";
import React, { Component } from "react";
import Link from "./../Link/Link";
import SectionSpyNavigation from "./../SectionSpyNavigation/SectionSpyNavigation";

class Navigation extends Component {
	state = {
		windowWidth: window.innerWidth,
		open: false,
	};

	constructor(props) {
		super(props);
		this.scrollReference = window.scrollY;
	}

	onScroll = e => {
		if (!this.state.open) return;
		window.scroll(0, this.scrollReference);
	};

	onResize = e => {
		this.update(e);
	};

	componentDidMount = e => {
		window.addEventListener("mousewheel", this.onScroll);
		window.addEventListener("DOMMouseScroll", this.onScroll);
		window.addEventListener("touchmove", this.onScroll);
		window.addEventListener("resize", this.onResize);
	};

	componentWillUnmount = e => {
		window.addEventListener("mousewheel", this.onScroll);
		window.addEventListener("DOMMouseScroll", this.onScroll);
		window.addEventListener("touchmove", this.onScroll);
		window.removeEventListener("resize", this.onResize);
	};

	afterStateSet = e => {
		if (this.state.open) {
			this.scrollReference = window.scrollY;
		} else {
			this.scrollReference = null;
		}
	};

	update = e => {
		this.setState(
			{
				...this.state,
				...{
					windowWidth: window.innerWidth,
				},
			},
			this.afterStateSet
		);
	};

	onClick = e => {
		this.setState(
			{
				...this.state,
				...{
					open: !this.state.open,
				},
			},
			this.afterStateSet
		);
	};

	onItemClick = e => {
		Link.onClick(e);
		setTimeout(() => {
			this.onClick();
		}, 750);
	};

	render() {
		return (
			<div>
				{this.state.windowWidth < 992 ? (
					<nav open={this.state.open}>
						<button onClick={this.onClick} className={styles.button}>
							<span className={styles.buttonItem} />
							<span className={styles.buttonItem} />
							<span className={styles.buttonItem} />
						</button>
						<SectionSpyNavigation
							onItemClick={this.onItemClick}
							sections={this.props.sections}
							ul={styles.ul}
							li={styles.li}
							a={styles.a}
							active={styles.aActive}
						/>
					</nav>
				) : (
					<nav>
						<button onClick={this.onClick} className={`${styles.button}`} disabled>
							<span className={styles.buttonItem} />
							<span className={styles.buttonItem} />
							<span className={styles.buttonItem} />
						</button>
					</nav>
				)}
			</div>
		);
	}
}

export default Navigation;
