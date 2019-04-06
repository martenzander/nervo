import styles from "./styles.pcss";
import React, { Component, Suspense } from "react";
import Output from "./../Output/Output";
import GithubRibbon from "./../GithubRibbon/GithubRibbon";
import Section from "./../Section/Section";
import Layout from "./../Layout/Layout";
import Logo from "./../Logo/Logo";
import Header from "./../Header/Header";
import Hero from "./../Hero/Hero";
import Footer from "./../Footer/Footer";
import * as Nervo from "../../../../../src/js/index";
const data = require("./../../../data/index.js").default;

class App extends Component {
	state = {
		value: 0,
	};

	constructor(props) {
		super(props);
		this.data = data;
		this.sections = this.data.sections.map((s, i) => {
			return (
				<Section
					sectionLength={this.data.sections.length}
					id={i}
					value={s}
					key={s.name}
					contents={s.contents}
				/>
			);
		});
	}

	render() {
		return (
			<div className={`${styles.app} app`}>
				{/* <GithubRibbon /> */}
				<Header value={this} />
				<Hero>
					<div className={"nervo-container"}>
						<Logo />
						<br />
						{this.data.name}
						<br />
						{`v${this.data.version}`}
						<br />
						<p>{this.data.description}</p>
					</div>
				</Hero>
				<div className={`${styles.margin}`}>
					<Layout className={`js-main-content`} content={this.sections} />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
