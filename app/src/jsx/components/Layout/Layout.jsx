import React, { Component } from "react";
import Sidebar from "./../Sidebar/Sidebar";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";

class Layout extends Component {
	state = {
		renderSidebarNavigation: false,
	};

	mainCallback = e => {
		this.setState({
			renderSidebarNavigation: true,
		});
	};

	render() {
		const renderSidebar = this.state.renderSidebarNavigation;
		return (
			<div className={this.props.className}>
				<div className={"nervo-container"}>
					<div className={"nervo-void"}>
						<div
							className={
								"nervo-col-12 nervo-col-sm-12 nervo-col-md-12 nervo-col-lg-9"
							}
						>
							<main ref={this.mainCallback}>{this.props.content}</main>
						</div>

						<div
							className={
								"nervo-col-12 nervo-col-sm-12 nervo-col-md-12 nervo-col-lg-3"
							}
						>
							{renderSidebar && (
								<Sidebar>
									<SidebarNavigation
										renderSidebarNavigation={this.state.renderSidebarNavigation}
										sections={this.props.content}
									/>
								</Sidebar>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;
