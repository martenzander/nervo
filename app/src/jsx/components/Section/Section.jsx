import styles from "./styles.pcss";
import React, { Component } from "react";
import Code from "./../Code/Code";
import AttentionBox from "./../AttentionBox/AttentionBox";
import PropsList from "./../PropsList/PropsList";
import Headline from "./../Headline/Headline";
import Divider from "./../Divider/Divider";
import Copy from "./../Copy/Copy";
import CodePen from "./../CodePen/CodePen";
import Canvas from "./../Canvas/Canvas";

class Section extends Component {
	constructor(props) {
		super(props);
		if (props.contents !== undefined) {
			this.componentGroups = this.props.contents.map((cg, i) => {
				const currentGroup = cg;
				const components = [];

				cg.forEach((c, n) => {
					switch (c.component) {
						case "code":
							components.push(<Code key={n} value={c.value} />);
							break;
						case "copy":
							components.push(<Copy key={n} value={c.value} />);
							break;
						case "codePen":
							components.push(<CodePen key={n} value={c.value} />);
							break;
						case "canvas":
							components.push(<Canvas key={n} value={c.value} />);
							break;
						case "attentionBox":
							components.push(<AttentionBox key={n}>{c.value}</AttentionBox>);
							break;
						case "propsList":
							components.push(<PropsList key={n} value={c.value} />);
							break;
						case "headline":
							components.push(<Headline key={n} value={c.value} type={c.type} />);
							break;
						default:
							components.push(<div key={n}>{"no valid component"}</div>);
							break;
					}
				});

				return (
					<div key={i} className={styles.componentGroup}>
						{components}
					</div>
				);
			});
		}
	}

	render() {
		return (
			<section
				className={`${styles.section} js-section`}
				id={this.props.uuid.replace(/\s/g, "")}
			>
				{/* <div className={styles.componentGroup}> */}
				<Headline value={`${this.props.value.name}`} type={"h2"} />
				{/* </div> */}
				{this.componentGroups}
				{this.props.id + 1 === this.props.sectionLength ? null : <Divider />}
			</section>
		);
	}
}

export default Section;
