import consultationsReducer from "./consultationReducer";
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

let store = configureStore({
    reducer: {
        consultations: consultationsReducer,
        posts: postReducer,
    }
});

export default store;

window.store = store;