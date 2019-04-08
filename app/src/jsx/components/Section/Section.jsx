import styles from "./styles.pcss";
import React, { Component, Suspense } from "react";
import Code from "./../Code/Code";
const Headline = React.lazy(() => import("./../Headline/Headline"));
const Copy = React.lazy(() => import("./../Copy/Copy"));
const Divider = React.lazy(() => import("./../Divider/Divider"));
const CodePen = React.lazy(() => import("./../CodePen/CodePen"));

class Section extends Component {
	constructor(props) {
		super(props);
		if (props.contents !== undefined) {
			this.components = this.props.contents.map((c, i) => {
				switch (c.component) {
					case "code":
						return <Code key={i} value={c.value} />;
						break;
					case "copy":
						return (
							<Suspense key={i} fallback={<div>Loading Copy Component</div>}>
								<Copy key={i} value={c.value} />
							</Suspense>
						);
						break;
					case "codePen":
						return (
							<Suspense key={i} fallback={<div>Loading Copy Component</div>}>
								<CodePen key={i} value={c.value} />
							</Suspense>
						);
						break;
					default:
						return <div key={i}>{"no valid component"}</div>;
						break;
				}
			});
		}
	}

	render() {
		return (
			<section className={`${styles.section} js-section`} id={this.props.value.name}>
				<Suspense fallback={<div>Loading...</div>}>
					<Headline value={this.props.value.name} type={"h2"} />
					{this.components}
					{/* {this.props.id + 1 === this.props.sectionLength ? null : <Divider />} */}
				</Suspense>
			</section>
		);
	}
}

export default Section;
