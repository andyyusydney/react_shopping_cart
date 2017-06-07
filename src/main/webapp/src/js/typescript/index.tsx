import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";

import { Hello } from "./components/Hello";

$(document).ready(function () {
	ReactDOM.render(
		<Hello compiler="TypeScript" framework="React" />,
		document.getElementById("example")
	);
});