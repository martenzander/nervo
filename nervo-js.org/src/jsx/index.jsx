import React from "react";
import { render } from "react-dom";

import Index from "./pages/Index";
require("./../scss/styles.css");

// if (module.hot) {
// 	module.hot.accept();
// }

const target = document.getElementById("root");
if (target) render(<Index />, target);
