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
declare const Foxtel: any;
declare const _: any;

export class ItemsContent extends React.Component<any, ItemsContentStates> {
    constructor(props: ItemsContentProps, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");

        super(props, context);

        FOX.dyc.subscribeEvent("modelShopCart", this.updatePacks.bind(this));
        FOX.context.subscribe("SHOP_CART_REFRESHED", this.updatePacks.bind(this));

        this.state = {
            defaultMsg: shoppingCartDataObj.descriptionMsg
        };
    }

    updatePacks(data: any) {
        console.log("Shop cart's data is loaded! data=", data);
        console.log("this.props.packs=", this.props.packs);
        /* test data
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

        const tiers: Array<TIERS> = data.play.tiers;
        tiers.map((tier: any) => { // add
            if (!_.some(this.props.packs, tier)) {
                this.props.dispatch(addPackage(tier));
            }
        });

        this.props.packs.map((pack: any) => { // remove
            var isPackExist = _.find(tiers, function(tier: any) {
                return tier.tierId === pack.tierId;
            })

            if (!isPackExist) {
                this.props.dispatch(removePackage(pack));
            }
        });
    }

    onRemovePackClick(tierId: number, tierTitle: string) {
        Foxtel.ShopCartManager.removePlayTier(tierId);
    }

    render() {
        let ItemsContentRender: Object;
        let ItemsListRender: Array<any> = [];
        let hasStarter: boolean;
        try {
            hasStarter = Foxtel.ShopCartManager.hasStarter();
        } catch(err) {
            hasStarter = false;
        }

        if (this.props.packs && this.props.packs.length > 0) {
            this.props.packs.map((tier: any) => {
                ItemsListRender.push(
                    <p key={tier.tierId} className="foxtel-now-jumbotron__pack-tag" data-tier-id={tier.tierId}>
                        <span>{tier.title}</span> - $<span>{tier.discountedPrice}</span>/month
                        {
                            (() => {
                                tier.removable = true; // To be removed. Force to be removable for testing.
                                if (tier.removable && tier.type !== "EXTRA") {
                                    return <sub onClick={(e) => this.onRemovePackClick(tier.tierId, tier.title)}>⨯</sub>
                                }
                            })()
                        }
                    </p>
                );
            })
            ItemsContentRender = (
                <div className="cart-item-wrapper">
                    {ItemsListRender}
                    <p className="foxtel-now-jumbotron__pack-tag--transparent">
                    {
                        (() => {
                            if (Foxtel.ShopCartManager.hasPremium()) {
                                if (hasStarter) {
                                    if (this.props.packs.length > 2) {
                                        return (
                                            <span>
                                                + <span>{this.props.packs.length - 2}</span> {'\u00A0'}{'\u00A0'}<span>more</span>
                                            </span>
                                        );
                                    }
                                } else {
                                    if (this.props.packs.length > 1) {
                                        return (
                                            <span>
                                                + <span>{this.props.packs.length - 1}</span> {'\u00A0'}{'\u00A0'}<span>more</span>
                                            </span>
                                        );
                                    }
                                }
                            } else {
                                if (this.props.packs.length > 2) {
                                    return (
                                        <span>
                                            + <span>{this.props.packs.length - 2}</span> {'\u00A0'}{'\u00A0'}<span>more</span>
                                        </span>
                                    );
                                }
                            }
                        })()
                    }
                    </p>
                </div>
            )
        } else {
            if (hasStarter) {
                <div>
                    <p className="foxtel-now-jumbotron__pack-tag--ghost foxtelNowProductAddToCart">
                        <span data-tier-id="991148">Pop</span> - $<span>15</span>/mth
                        <sub>&plus;</sub>
                    </p>
                    <p>To access Premium packs or Extra channels, please add at least one of our starter packs</p>
                </div>
            } else {
                ItemsContentRender = (
                    <div className="add-packs-text">
                        <p dangerouslySetInnerHTML={{ __html: this.state.defaultMsg }}></p>
                    </div>
                )
            }
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