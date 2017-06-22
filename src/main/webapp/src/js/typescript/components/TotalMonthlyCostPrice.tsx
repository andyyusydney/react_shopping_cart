import * as React from "react";
import { PriceTag } from "./PriceTag";

export class TotalMonthlyCostPrice extends React.Component<undefined, undefined> {
    constructor(props: any, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");
        console.log("shoppingCartDataObj=", shoppingCartDataObj);

        super(props, context);
    }

    render() {
        return (
            <div className="foxtel-now-jumbotron--shopping-cart__summary__total-cost total">
                <p>Total</p>
                <PriceTag price="44" unit="month" />
            </div>
        )
    }
}