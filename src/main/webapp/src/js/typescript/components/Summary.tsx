import * as React from "react";

import { TotalMonthlyCostPrice } from "./TotalMonthlyCostPrice";
import { CheckoutBtn } from "./CheckoutBtn";
import { FreeTrail } from "./FreeTrail";
import { OfferEndsPrice } from "./OfferEndsPrice";

export interface SummaryProps {
    freeTrail: boolean;
    monthlyCostItems: Array<any>;
    checkoutURL: string;
    checkoutWithoutStarterURL: string;
    checkoutBtnLabel: string;
}

export class Summary extends React.Component<SummaryProps, undefined> {
    render() {
        let summaryRender: Object;
        if (this.props.freeTrail) {
            if (this.props.monthlyCostItems.length > 1) { // case 3
                summaryRender = (
                    <div>
                        <FreeTrail />
                        <OfferEndsPrice price={this.props.monthlyCostItems[1].value} />
                    </div>
                );
            } else { // case 2
                summaryRender = (
                    <FreeTrail />
                );
            }
        } else {
            if (this.props.monthlyCostItems.length > 1) { // case 4
                summaryRender = (
                    <OfferEndsPrice price={this.props.monthlyCostItems[1].value} />
                );
            } else { // case 1
                // return (); // return empty
            }
        }

        return (
            <div>
                { summaryRender }
                <TotalMonthlyCostPrice />
                <CheckoutBtn
                    checkoutUrl={this.props.checkoutURL}
                    checkoutNoStarterUrl={this.props.checkoutWithoutStarterURL}
                    btnLabel={this.props.checkoutBtnLabel}
                    />
            </div>
        )
    }
}