import * as React from "react";
import {ItemsContentConnect} from "./ItemsContent";

export interface DescriptionProps { title: string; }

// 'DescriptionProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Description extends React.Component<DescriptionProps, undefined> {
    render() {
        return (
            <div className="foxtel-now-jumbotron--shopping-cart__description-wrapper">
                <div className="cart-title-wrapper">
                    <p>{this.props.title}</p>
                </div>
                <ItemsContentConnect />
            </div>
        )
    }
}