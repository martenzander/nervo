import React, { Component } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Copy extends Component {
	render() {
		return <p>{ ReactHtmlParser(this.props.value) }</p>;
	}
}

export default Copy;
