import * as React from "react";

export interface ItemsContentStates { defaultMsg: string; }

export class ItemsContent extends React.Component<undefined, ItemsContentStates> {
    constructor(props: any, context: any) {
        const shoppingCartDataObj = $("#shoppingCartCompData").data("shoppingCartComp");

        super(props, context);

        this.state = {
            defaultMsg: shoppingCartDataObj.descriptionMsg
        };
    }

    render() {
        return (
            <div className="add-packs-text">
                <p>{this.state.defaultMsg}</p>
            </div>
        )
    }
}