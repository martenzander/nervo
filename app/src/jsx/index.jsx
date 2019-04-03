import React from "react";
import { render } from "react-dom";

import App from "./components/App/App";
import styles from "./../scss/globals/_index.pcss";
import MeshHelper from "mesh-helper";

const meshHelper = new MeshHelper({});

console.log(styles);
// if (module.hot) {
// 	module.hot.accept();
// }

const target = document.getElementById("root");
if (target) render(<App />, target);
