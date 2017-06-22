import * as React from "react";

type TIERS = {
    discountedPrice: string,
    price: string,
    removable?: boolean,
    tierId: number,
    title: string,
    type: string
}

export interface ItemsContentStates {
    defaultMsg: string;
    play: {
        tiers: Array<TIERS>
    };
}

export class ItemsContent extends React.Component<undefined, ItemsContentStates> {
    constructor(props: any, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");

        super(props, context);

        this.state = {
            defaultMsg: shoppingCartDataObj.descriptionMsg,
            play: {
                tiers: [
                    {
                        discountedPrice: "15",
                        price: "15",
                        removable: true,
                        tierId: 991148,
                        title: "Pop",
                        type: "GENRE"
                    },
                    {
                        tierId: 990703,
                        price: "29",
                        discountedPrice: "29",
                        title: "Sport",
                        type: "PREMIUM",
                        removable: true
                    },
                    {
                        tierId: 991145,
                        price: "0",
                        discountedPrice: "0",
                        title: "Chelsea TV",
                        type: "EXTRA",
                        removable: true
                    },
                    {
                        tierId: 991146,
                        price: "0",
                        discountedPrice: "0",
                        title: "Liverpool FC TV",
                        type: "EXTRA"
                    },
                    {
                        tierId: 991147,
                        price: "0",
                        discountedPrice: "0",
                        title: "Manchester United FC TV",
                        type: "EXTRA"
                    }
                ]
            }
        };
    }

    render() {
        let ItemsContentRender: Object;
        let ItemsListRender: Array<any> = [];
        if (this.state.play && this.state.play.tiers) {
            this.state.play.tiers.map((tier) => {
                ItemsListRender.push(
                    <p key={tier.tierId} className="foxtel-now-jumbotron__pack-tag" data-tier-id={tier.tierId}>
                        <span>{tier.title}</span> - $<span>{tier.price}</span>/month
                        <sub>⨯</sub>
                    </p>
                );
            })
            ItemsContentRender = (
                <div className="cart-item-wrapper">
                    {ItemsListRender}
                </div>
            )
        } else {
            ItemsContentRender = (
                <div className="add-packs-text">
                    <p>{this.state.defaultMsg}</p>
                </div>
            )
        }

        return (
            <div>
                {ItemsContentRender}
            </div>
        )
    }
}