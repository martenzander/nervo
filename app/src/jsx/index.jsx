import React from "react";
import { render } from "react-dom";

import App from "./components/App/App";
import styles from "./../scss/_index.scss";

// if (module.hot) {
// 	module.hot.accept();
// }

const target = document.getElementById("root");
if (target) render(<App />, target);
