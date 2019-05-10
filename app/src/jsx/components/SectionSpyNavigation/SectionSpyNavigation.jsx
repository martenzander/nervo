import React, { Component } from "react";

class SectionSpyNavigation extends Component {
	constructor(props) {
		super(props);
		this.sections = props.sections;
		this.state = {
			mainPaddingTop: 0,
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
			mainPaddingTop: parseInt(
				window
					.getComputedStyle(document.querySelector(".js-main-content"))
					.paddingTop.replace("px", "")
			),
		});
	};

	render() {
		const items = this.sections.map((s, i) => {
			const sectionNode = document.querySelector(`#${s.props.uuid.replace(/\s/g, "")}`);
			const sectionTop = sectionNode.getBoundingClientRect().top;
			const sectionHeight = sectionNode.getBoundingClientRect().height;
			let linkClass;

			if (
				sectionTop <= this.state.mainPaddingTop &&
				sectionTop + sectionHeight > this.state.mainPaddingTop
			) {
				linkClass = `${this.props.a} ${this.props.active}`;
			} else {
				linkClass = `${this.props.a}`;
			}

			return (
				<li key={s.props.uuid.replace(/\s/g, "")} className={this.props.li}>
					<a
						onClick={this.props.onItemClick ? this.props.onItemClick : null}
						href={`#${s.props.uuid.replace(/\s/g, "")}`}
						className={linkClass}
					>
						{s.props.value.name.replace("Nervo.", "").replace("()", "")}
					</a>
				</li>
			);
		});

		if (this.props.github) {
			return (
				<ul className={this.props.ul}>
					{items}
					<li className={this.props.li}>
						<a
							onClick={this.props.onItemClick ? this.props.onItemClick : null}
							href={this.props.data.repository.url.replace("git+", "")}
							className={this.props.a}
						>
							Github
						</a>
					</li>
				</ul>
			);
		} else {
			return <ul className={this.props.ul}>{items}</ul>;
		}
	}
}

export default SectionSpyNavigation;
