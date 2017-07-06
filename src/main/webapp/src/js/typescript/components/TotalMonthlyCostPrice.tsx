import * as React from "react";
import { PriceTag } from "./PriceTag";

declare const FOX: any;
declare const Foxtel: any;

interface TotalMonthlyCostPriceStates {
    price: string;
}

export class TotalMonthlyCostPrice extends React.Component<undefined, TotalMonthlyCostPriceStates> {
    constructor(props: any, context: any) {
        super(props, context);

        FOX.dyc.subscribeEvent("modelShopCart", this.updatePrice.bind(this));
        FOX.context.subscribe("SHOP_CART_REFRESHED", this.updatePrice.bind(this));

        this.state = {
            price: "0"
        };
    }

    updatePrice(data: any) {
        this.setState({
            price: data.play.monthlyCostIncludingOffer
        });
    }

    render() {
        return (
            <div className="foxtel-now-jumbotron--shopping-cart__summary__total-cost total">
                <p>Total</p>
                <PriceTag price={this.state.price} unit="month" />
            </div>
        )
    }
}