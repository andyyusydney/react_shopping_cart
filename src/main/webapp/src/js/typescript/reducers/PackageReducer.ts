import Action from "../actions/action";

type PACK = {
    discountedPrice: string,
    price: string,
    removable: boolean,
    tierId: number,
    title: string,
    type: string
}
export type PackageState = Array<PACK>;

export const packs = (state: Array<PACK> = [], action: Action<PACK>): PackageState => {
    console.log("PackageReducer.ts state=", state);
    switch (action.type) {
        case 'ADD_PACK':
            return [
                ...state,
                {
                    tierId: action.payload.tierId,
                    price: action.payload.price,
                    discountedPrice: action.payload.discountedPrice,
                    title: action.payload.title,
                    type: action.payload.type,
                    removable: action.payload.removable
                }
            ];
        case 'REMOVE_PACK':
            return state.filter(
                (item:any, index:number) => item.tierId !== action.payload.tierId
            );
        default:
            return state;
    }
}