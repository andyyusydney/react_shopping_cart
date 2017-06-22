import * as React from "react";
import * as ReactDom from "react-dom";
import { connect } from "react-redux";
import * as $ from "jquery";

import { Description } from "./Description";
import { TotalMonthlyCostPrice } from "./TotalMonthlyCostPrice";
import { CheckoutBtn } from "./CheckoutBtn";

interface ShoppingCartSummaryState {
    descriptionTitle: string;
    checkoutBtnLabel: string;
    checkoutURL: string;
    checkoutWithoutStarterURL: string;
};

class ShoppingCartSummary extends React.Component<any, ShoppingCartSummaryState> {
    constructor(props: any, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");
        console.log("shoppingCartDataObj=", shoppingCartDataObj);

        super(props, context);

        this.state = {
            descriptionTitle: shoppingCartDataObj.descriptionTitle,
            checkoutBtnLabel: shoppingCartDataObj.checkoutBtnLabel,
            checkoutURL: shoppingCartDataObj.checkoutURL,
            checkoutWithoutStarterURL: shoppingCartDataObj.checkoutWithoutStarterURL
        };
    }

    render() {
        return (
            <div className="foxtel-now-jumbotron">
                <div className="container">
                    <div id="cartCollection-container" className="foxtel-now-jumbotron--shopping-cart row">
                        <div className="foxtel-now-jumbotron--shopping-cart__description col-md-8 col-sm-12">
                            <Description title={this.state.descriptionTitle} />
                        </div>
                        <div className="foxtel-now-jumbotron--shopping-cart__summary col-md-4 col-sm-12">
                            <TotalMonthlyCostPrice />
                            <CheckoutBtn checkoutUrl={this.state.checkoutURL} checkoutNoStarterUrl={this.state.checkoutWithoutStarterURL} btnLabel={this.state.checkoutBtnLabel} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCartSummary