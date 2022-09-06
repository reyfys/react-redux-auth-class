import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({ dataUser: dataReducer, registerReducer });

export default rootReducer;
