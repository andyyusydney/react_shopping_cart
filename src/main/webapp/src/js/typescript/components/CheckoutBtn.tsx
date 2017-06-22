import * as React from "react";

export interface CheckoutBtnProps {
    checkoutUrl: string;
    checkoutNoStarterUrl: string;
    btnLabel: string;
}

export class CheckoutBtn extends React.Component<CheckoutBtnProps, undefined> {
    render() {
        return (
            <button className="foxtel-now-btn" data-button-url={this.props.checkoutUrl} data-button-without-starter-url={this.props.checkoutNoStarterUrl}>{this.props.btnLabel}</button>
        )
    }
}