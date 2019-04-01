import React, { Component, Suspense } from "react";
import Code from "./../Code/Code";
const Copy = React.lazy(() => import("./../Copy/Copy"));
const Divider = React.lazy(() => import("./../Divider/Divider"));

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
					default:
						return <div key={i}>{"no valid component"}</div>;
						break;
				}
			});
		}
	}
	render() {
		return (
			<section>
				<h3>{this.props.value.name}</h3>
				{this.components}
				<Suspense fallback={<div>Loading...</div>}>
					<Divider />
				</Suspense>
			</section>
		);
	}
}

export default Section;
