import React from "react";
import { render } from "react-dom";

import App from "./components/App";

// if (module.hot) {
// 	module.hot.accept();
// }

const target = document.getElementById("root");
if (target) render(<App />, target);
