import styles from "./styles.pcss";
import React, { Component } from "react";
import ProgressBar from "./../ProgressBar/ProgressBar";
import Navigation from "./../Navigation/Navigation";
import Logo from "./../Logo/Logo";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			classNames: `${styles.fader}`,
		};
	}

	onScroll = e => {
		this.updateClassNames(e);
	};

	onResize = e => {
		this.updateClassNames(e);
	};

	componentDidMount = e => {
		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("resize", this.onResize);
		this.header = document.querySelector("header");
		this.hero = document.querySelector(".js-hero");
	};

	componentWillUnmount = e => {
		window.removeEventListener("scroll", this.onScroll);
		window.removeEventListener("resize", this.onResize);
	};

	updateClassNames = e => {
		if (
			window.scrollY >=
			this.hero.getBoundingClientRect().height - this.header.getBoundingClientRect().height
		) {
			if (this.state.isActive) return;
			this.setState({
				isActive: true,
				classNames: `${styles.fader} ${styles.faderActive}`,
			});
		} else {
			if (!this.state.isActive) return;
			this.setState({
				isActive: false,
				classNames: `${styles.fader}`,
			});
		}
	};

	render() {
		return (
			<header className={`${styles.this} js-header`}>
				<div className={this.state.classNames}>
					<div className={"nervo-container"}>
						<div className={styles.contentHolder}>
							<div className={`${styles.content} ${styles.highZIndex}`}>
								<h1 className={styles.content}>
									<a>
										<Logo />
									</a>
								</h1>
								<p className={styles.content}>
									<span className={styles.content}>
										{this.props.value.data.version}
									</span>
									<span className={styles.content}>
										{this.props.value.data.version}
									</span>
								</p>
							</div>
							<div className={styles.content}>
								<Navigation sections={this.props.value.sections} />
							</div>
						</div>
					</div>
					<div className={`${styles.progressBar}`}>
						<ProgressBar />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
