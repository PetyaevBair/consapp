import { combineReducers, legacy_createStore as createStore } from "redux";
import consultationsReducer from "./consultationReducer";

let reducers = combineReducers({
    consultations: consultationsReducer
});

let store = createStore(reducers);

export default store;