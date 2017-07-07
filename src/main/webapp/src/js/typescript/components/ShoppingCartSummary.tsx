import * as React from "react";
import * as ReactDom from "react-dom";
import { connect } from "react-redux";
import * as $ from "jquery";

import { Description } from "./Description";
import { Summary } from "./Summary";

interface ShoppingCartSummaryState {
    descriptionTitle: string;
    checkoutBtnLabel: string;
    checkoutURL: string;
    checkoutWithoutStarterURL: string;
    freeTrail: boolean;
    monthlyCostItems: Array<any>;
    didScroll: boolean;
};

declare const FOX: any;
declare const Foxtel: any;

class ShoppingCartSummary extends React.Component<any, ShoppingCartSummaryState> {
    constructor(props: any, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");
        console.log("shoppingCartDataObj=", shoppingCartDataObj);

        super(props, context);

        FOX.dyc.subscribeEvent("modelShopCart", this.setFreeTrail.bind(this));
        FOX.context.subscribe("SHOP_CART_REFRESHED", this.setFreeTrail.bind(this));

        this.state = {
            descriptionTitle: shoppingCartDataObj.descriptionTitle,
            checkoutBtnLabel: shoppingCartDataObj.checkoutBtnLabel,
            checkoutURL: shoppingCartDataObj.checkoutURL,
            checkoutWithoutStarterURL: shoppingCartDataObj.checkoutWithoutStarterURL,
            freeTrail: false,
            monthlyCostItems: [],
            didScroll: false
        };
    }

    scrollConfig() {
        // Hide Header on on scroll down
        let lastScrollTop = 0;
        const delta = 3;
        const shoppingCart = $('.foxtel-now-jumbotron');
        const shoppingCartHeight = $('.foxtel-now-jumbotron').outerHeight();

        setInterval((function() {
            if (this.state.didScroll) {
                hasScrolled();
                this.setState({
                    didScroll: false
                });
            }else if(lastScrollTop == 0){
                initState();
            }
        }).bind(this), 50);

        function initState() {
            shoppingCart.removeClass('foxtel-now-jumbotron--minimized');
            shoppingCart.find('.add-packs-text').removeClass('hidden');
        }

        function hasScrolled() {
            var st = $(window).scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            shoppingCart.addClass('foxtel-now-jumbotron--minimized');
            shoppingCart.find('.add-packs-text').addClass('hidden');
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > shoppingCartHeight){
                // Scroll Down
                $('.foxtel-now-jumbotron').removeClass('shoppingCart-nav-down').addClass('shoppingCart-nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.foxtel-now-jumbotron').removeClass('shoppingCart-nav-up').addClass('shoppingCart-nav-down');
                }
            }

            lastScrollTop = st;
        }
    }

    setFreeTrail(data: any) {
        this.setState({
            freeTrail: data.hasFreeTrial || data.play.eligibleFreeTrial || false,
            monthlyCostItems: data.quote.monthlyCostItems
        });
    }

    handleScroll() {
        this.setState({
            didScroll: true
        });
    }

    componentDidMount() {
        this.scrollConfig();
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div className="foxtel-now-jumbotron">
                <div className="container">
                    <div id="cartCollection-container" className="foxtel-now-jumbotron--shopping-cart row">
                        <div className="foxtel-now-jumbotron--shopping-cart__description col-md-8 col-sm-12">
                            <Description title={this.state.descriptionTitle} />
                        </div>
                        <div className="foxtel-now-jumbotron--shopping-cart__summary col-md-4 col-sm-12">
                            <Summary
                                freeTrail={this.state.freeTrail}
                                monthlyCostItems={this.state.monthlyCostItems}
                                checkoutURL={this.state.checkoutURL}
                                checkoutWithoutStarterURL={this.state.checkoutWithoutStarterURL}
                                checkoutBtnLabel={this.state.checkoutBtnLabel}
                                />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCartSummary