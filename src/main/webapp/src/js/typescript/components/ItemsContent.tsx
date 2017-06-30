import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addPackage, removePackage } from "../actions/index";

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
}

interface ItemsContentProps {
    onRemovePackClick: Function;
}

declare const FOX: any;

export class ItemsContent extends React.Component<any, ItemsContentStates> {
    constructor(props: ItemsContentProps, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");

        super(props, context);

        FOX.dyc.subscribeEvent("modelShopCart", this.initStatePacks.bind(this));
        FOX.context.subscribe("SHOP_CART_REFRESHED", this.initStatePacks.bind(this));

        this.state = {
            defaultMsg: shoppingCartDataObj.descriptionMsg
        };
    }

    initStatePacks(data: any) {
        console.log("Shop cart's data is loaded! data=", data);
        /*
        data.play.tiers = [
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
        ];
        */

        if (data.play.tiers && data.play.tiers.length > 0) {
            const tiers: Array<TIERS> = data.play.tiers;
            tiers.map((tier) => {
               this.props.dispatch(addPackage(tier));
            });
        }
    }

    onRemovePackClick(tierId: number, tierTitle: string) {
        this.props.onRemovePackClick(tierId, tierTitle);
    }

    render() {
        let ItemsContentRender: Object;
        let ItemsListRender: Array<any> = [];
        if (this.props.packs && this.props.packs.length > 0) {
            this.props.packs.map((tier: any) => {
                ItemsListRender.push(
                    <p key={tier.tierId} className="foxtel-now-jumbotron__pack-tag" data-tier-id={tier.tierId}>
                        <span>{tier.title}</span> - $<span>{tier.price}</span>/month
                        <sub onClick={(e) => this.onRemovePackClick(tier.tierId, tier.title)}>⨯</sub>
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

const mapStateToProps = (state: any) => {
    return {
        packs: state.packs
    }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        onRemovePackClick: (tierId: number) => {
            dispatch(removePackage(tierId))
        },
        dispatch
    }
};

export const ItemsContentConnect = connect(mapStateToProps, mapDispatchToProps)(ItemsContent)