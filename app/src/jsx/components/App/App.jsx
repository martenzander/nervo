import styles from "./styles.pcss";
import React, { Component, Suspense } from "react";
import Output from "./../Output/Output";
import GithubRibbon from "./../GithubRibbon/GithubRibbon";
import Section from "./../Section/Section";
import Layout from "./../Layout/Layout";
import Logo from "./../Logo/Logo";
import Button from "./../Button/Button";
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
						<Logo big={true} />
						<p className={`${styles.color}`}>
							<span className={`${styles.textTransform}`}>{this.data.name}</span>
							<br />
							{`v${this.data.version}`}
						</p>
						<br />
						<p className={`${styles.description}`}>{this.data.description}</p>
						<div>
							<Button>Documentation</Button>
							<Button>Github</Button>
						</div>
					</div>
				</Hero>
				<div className={`${styles.margin}`}>
					<Layout
						className={`js-main-content ${styles.padding}`}
						content={this.sections}
					/>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
