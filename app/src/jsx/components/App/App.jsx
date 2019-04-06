// import styles from "./styles.pcss";
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
		this.tween = new Nervo.Tween(
			{ value: 0 },
			{ value: 100 },
			{
				autoStart: false,
				duration: 2,
				// loop: true,
				onProgress: e => {
					this.setState({ ...{}, ...e.target.value });
				},
			}
		);
	}

	componentDidMount() {
		this.tween.start();
	}

	render() {
		const sections = this.data.sections.map((s, i) => {
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

		return (
			<div className="app">
				<GithubRibbon />
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
				<Layout className={"js-main-content"} content={sections} />
				<Output value={this.state.value} />
				<Footer />
			</div>
		);
	}
}

export default App;
