import styles from "./styles.scss";
import React, { Component } from "react";

class Divider extends Component {
	render() {
		return <hr className={styles.divider} />;
	}
}

export default Divider;
