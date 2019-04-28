import styles from "./styles.pcss";
import React, { Component } from "react";
import Output from "./../Output/Output";
import GithubRibbon from "./../GithubRibbon/GithubRibbon";
import Section from "./../Section/Section";
import Layout from "./../Layout/Layout";
import InpageAnchors from "./../InpageAnchors/InpageAnchors";
import Logo from "./../Logo/Logo";
import Header from "./../Header/Header";
import Button from "./../Button/Button";
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
					key={i}
					sectionLength={this.data.sections.length}
					id={i}
					value={s}
					uuid={s.key}
					contents={s.contents}
				/>
			);
		});
	}

	render() {
		return (
			<div className={`${styles.app} app`}>
				<InpageAnchors>
					{/* <GithubRibbon /> */}
					<Header value={this} />
					<Hero>
						<div className={"nervo-container"}>
							<Logo big />
							<p className={`${styles.color}`}>{`v${this.data.version}`}</p>
							<br />
							<p className={`${styles.description}`}>{this.data.description}</p>
							<div>
								<Button primary href={`#${data.sections[0].key}`}>
									Documentation
								</Button>
								<Button href={this.data.repository.url.replace("git+", "")}>
									Github
								</Button>
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
				</InpageAnchors>
			</div>
		);
	}
}

export default App;
