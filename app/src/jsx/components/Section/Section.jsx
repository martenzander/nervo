import styles from "./styles.pcss";
import React, { Component } from "react";
import Code from "./../Code/Code";
import AttentionBox from "./../AttentionBox/AttentionBox";
import Headline from "./../Headline/Headline";
import Divider from "./../Divider/Divider";
import Copy from "./../Copy/Copy";
import CodePen from "./../CodePen/CodePen";
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
						return <Copy key={i} value={c.value} />;
						break;
					case "codePen":
						return <CodePen key={i} value={c.value} />;
						break;
					case "canvas":
						return <Canvas key={i} value={c.value} />;
						break;
					case "attentionBox":
						return <AttentionBox key={i}>{c.value}</AttentionBox>;
						break;
					case "headline":
						return <Headline key={i} value={c.value} type={c.type} />;
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
				{this.props.id + 1 === this.props.sectionLength ? null : <Divider />}
			</section>
		);
	}
}

export default Section;
