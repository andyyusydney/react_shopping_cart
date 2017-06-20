import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store, createStore } from "redux";
import { Provider } from "react-redux";
import * as $ from "jquery";

import { Hello } from "./components/Hello";
import ShoppingCartSummary from "./components/ShoppingCartSummary";
import rootReducer from "./reducers/RootReducer";

$(document).ready(function () {
    const store: Store<any> = createStore(rootReducer);

	ReactDOM.render(
	    <Provider store={store}>
		    <ShoppingCartSummary />
		</Provider>,
		document.getElementById("shoppingCartCompContainer")
	);
});