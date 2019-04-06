import React, { Component, Suspense } from "react";
const Link = React.lazy(() => import("../Link/Link"));

class SectionSpyNavigation extends Component {
	constructor(props) {
		super(props);
		this.sections = props.sections;
		this.state = {
			items: null,
		};
	}

	onScroll = e => {
		this.updateSidebar();
	};

	onResize = e => {
		this.updateSidebar();
	};

	componentDidMount = e => {
		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("resize", this.onResize);
	};

	componentWillUnmount = e => {
		window.removeEventListener("scroll", this.onScroll);
		window.removeEventListener("resize", this.onResize);
	};

	updateSidebar = e => {
		this.setState({
			items: this.sections.map((s, i) => {
				const sectionNode = document.querySelector(`#${s.key}`);
				const sectionTop = sectionNode.getBoundingClientRect().top;
				const sectionHeight = sectionNode.getBoundingClientRect().height;

				if (sectionTop <= 60 && sectionTop + sectionHeight > 60) {
					return (
						<li key={s.key} className={this.props.li}>
							<Suspense fallback={<div>Link Component</div>}>
								<Link
									onClick={this.props.onItemClick ? this.props.onItemClick : null}
									value={s.key}
									target={`#${s.key}`}
									className={`${this.props.a} ${this.props.active}`}
								/>
							</Suspense>
						</li>
					);
				}
				return (
					<li key={s.key} className={this.props.li}>
						<Suspense fallback={<div>Link Component</div>}>
							<Link
								onClick={this.props.onItemClick ? this.props.onItemClick : null}
								value={s.key}
								target={`#${s.key}`}
								className={`${this.props.a} `}
							/>
						</Suspense>
					</li>
				);
			}),
		});
	};

	render() {
		return <ul className={this.props.ul}>{this.state.items}</ul>;
	}
}

export default SectionSpyNavigation;
