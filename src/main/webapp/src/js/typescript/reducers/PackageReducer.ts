import Action from "../actions/action";

type PACK = {
    packName: string[],
    packTierId: string[]
}
export type PackageState = Array<PACK>;

export const Packs = (state: PackageState = [], action: Action<PACK>): PackageState => {
    console.log("PackageReducer.ts state=", state);
    switch (action.type) {
        case 'ADD_PACK':
            return [
                ...state,
                {
                    packTierId: action.payload.packTierId,
                    packName: action.payload.packName
                }
            ];
        case 'REMOVE_PACK':
            return state.filter((item, index) => item.packTierId !== action.payload.packTierId);
        default:
            return state;
    }
}