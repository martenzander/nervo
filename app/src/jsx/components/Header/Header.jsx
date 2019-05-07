import styles from "./styles.pcss";
import React, { Component } from "react";
import ProgressBar from "./../ProgressBar/ProgressBar";
import Navigation from "./../Navigation/Navigation";
import Logo from "./../Logo/Logo";
const downloadCounts = require("npm-download-counts");

class Header extends Component {
	static PACKAGE = "nervo";
	static START = new Date("September 23, 2017 11:13:00");
	static END = new Date();

	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			classNames: `${styles.fader}`,
			downloads: 0,
		};

		downloadCounts(Header.PACKAGE, Header.START, Header.END, (err, data) => {
			let downloads = 0;

			data.forEach(day => {
				downloads += day.count;
			});

			this.setState({
				...this.state,
				downloads: downloads,
			});
		});
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
								<h1
									className={`${styles.content} ${styles.marginRight} ${
										styles.headline
									}`}
								>
									<a>
										<Logo />
									</a>
								</h1>
								<p className={`${styles.content} ${styles.marginRight}`}>
									<span
										className={`${styles.content} ${styles.marginRight} ${
											styles.font
										}`}
									>
										v{this.props.value.data.version}
									</span>
									<span
										className={`${styles.content} ${styles.marginRight} ${
											styles.font
										}`}
									>
										{this.state.downloads}
										{/* {this.props.value.data.version} */}
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
