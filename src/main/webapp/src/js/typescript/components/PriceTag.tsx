import * as React from "react";

export interface PriceTagProps { price: string; unit: string; }

export class PriceTag extends React.Component<PriceTagProps, undefined> {
    render() {
        return (
            <p>${this.props.price}<sub>/{this.props.unit}</sub></p>
        )
    }
}