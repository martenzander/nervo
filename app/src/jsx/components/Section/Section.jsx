import styles from "./styles.pcss";
import React, { Component, Suspense } from "react";
import Code from "./../Code/Code";
import AttentionBox from "./../AttentionBox/AttentionBox";
import Headline from "./../Headline/Headline";
const Copy = React.lazy(() => import("./../Copy/Copy"));
const Divider = React.lazy(() => import("./../Divider/Divider"));
const CodePen = React.lazy(() => import("./../CodePen/CodePen"));
import Canvas from "./../Canvas/Canvas";

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
					case "canvas":
						return <Canvas key={i} value={c.value} />;
						break;
					case "attentionBox":
						return <AttentionBox key={i}>{c.value}</AttentionBox>;
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
			<section
				className={`${styles.section} js-section`}
				id={this.props.uuid.replace(/\s/g, "")}
			>
				<Headline value={this.props.value.name} type={"h2"} />
				{this.components}
				{/* {this.props.id + 1 === this.props.sectionLength ? null : <Divider />} */}
			</section>
		);
	}
}

export default Section;
