import * as React from "react";
import * as ReactDom from "react-dom";
import { connect } from "react-redux";
import * as $ from "jquery";

import { Description } from "./Description";
import { TotalMonthlyCostPrice } from "./TotalMonthlyCostPrice";
import { CheckoutBtn } from "./CheckoutBtn";
import { FreeTrail } from "./FreeTrail";
import { OfferEndsPrice } from "./OfferEndsPrice";

interface ShoppingCartSummaryState {
    descriptionTitle: string;
    checkoutBtnLabel: string;
    checkoutURL: string;
    checkoutWithoutStarterURL: string;
    freeTrail: boolean;
    monthlyCostItems: Array<any>;
};

declare const FOX: any;
declare const Foxtel: any;

class ShoppingCartSummary extends React.Component<any, ShoppingCartSummaryState> {
    constructor(props: any, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");
        console.log("shoppingCartDataObj=", shoppingCartDataObj);

        super(props, context);

        FOX.dyc.subscribeEvent("modelShopCart", this.setFreeTrail.bind(this));
        FOX.context.subscribe("SHOP_CART_REFRESHED", this.setFreeTrail.bind(this));

        this.state = {
            descriptionTitle: shoppingCartDataObj.descriptionTitle,
            checkoutBtnLabel: shoppingCartDataObj.checkoutBtnLabel,
            checkoutURL: shoppingCartDataObj.checkoutURL,
            checkoutWithoutStarterURL: shoppingCartDataObj.checkoutWithoutStarterURL,
            freeTrail: false,
            monthlyCostItems: []
        };
    }

    setFreeTrail(data: any) {
        this.setState({
            freeTrail: data.hasFreeTrial || data.play.eligibleFreeTrial || false,
            monthlyCostItems: data.quote.monthlyCostItems
        });
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
                            {
                                (() => {
                                    if (this.state.freeTrail) {
                                        if (this.state.monthlyCostItems.length > 1) { // case 3
                                            return (
                                                <div>
                                                    <FreeTrail />
                                                    <OfferEndsPrice price={this.state.monthlyCostItems[1].value} />
                                                </div>
                                            );
                                        } else { // case 2
                                            return (
                                                <FreeTrail />
                                            );
                                        }
                                    } else {
                                        if (this.state.monthlyCostItems.length > 1) { // case 4
                                            return (
                                                <OfferEndsPrice price={this.state.monthlyCostItems[1].value} />
                                            );
                                        } else { // case 1
                                            // return (); // return empty
                                        }
                                    }
                                })()
                            }
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