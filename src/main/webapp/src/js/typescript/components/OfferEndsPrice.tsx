import * as React from "react";
import { PriceTag } from "./PriceTag";

export interface OfferEndsPriceProps { price: string; }

export class OfferEndsPrice extends React.Component<OfferEndsPriceProps, undefined> {
    render() {
        return (
            <div className="foxtel-now-jumbotron--shopping-cart__summary__total-cost">
                <p>After offer ends</p>
                <PriceTag price={this.props.price} unit="month" />
            </div>
        )
    }
}