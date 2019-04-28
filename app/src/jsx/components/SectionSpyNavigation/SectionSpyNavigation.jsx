import React, { Component } from "react";

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
		const mainPaddingTop = parseInt(
			window
				.getComputedStyle(document.querySelector(".js-main-content"))
				.paddingTop.replace("px", "")
		);
		this.setState({
			items: this.sections.map((s, i) => {
				const sectionNode = document.querySelector(`#${s.props.uuid.replace(/\s/g, "")}`);
				const sectionTop = sectionNode.getBoundingClientRect().top;
				const sectionHeight = sectionNode.getBoundingClientRect().height;

				if (sectionTop <= mainPaddingTop && sectionTop + sectionHeight > mainPaddingTop) {
					return (
						<li key={s.props.uuid.replace(/\s/g, "")} className={this.props.li}>
							<a
								onClick={this.props.onItemClick ? this.props.onItemClick : null}
								href={`#${s.props.uuid.replace(/\s/g, "")}`}
								className={`${this.props.a} ${this.props.active}`}
							>
								{s.props.value.name.replace("Nervo.", "").replace("()", "")}
							</a>
						</li>
					);
				}
				return (
					<li key={s.props.uuid.replace(/\s/g, "")} className={this.props.li}>
						<a
							onClick={this.props.onItemClick ? this.props.onItemClick : null}
							href={`#${s.props.uuid.replace(/\s/g, "")}`}
							className={`${this.props.a} `}
						>
							{s.props.value.name.replace("Nervo.", "").replace("()", "")}
						</a>
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
