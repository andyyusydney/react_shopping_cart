import { combineReducers } from "redux";
import { packs } from "./PackageReducer";

const rootReducer = combineReducers({
    packs
});

export default rootReducer;