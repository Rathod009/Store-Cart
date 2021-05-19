import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { itemReducer } from "./itemReducer";
import { logReducer } from "./logReducer";

export default combineReducers({
    logged : logReducer,
    itemCart : itemReducer,
    adminLogged : adminReducer,
});