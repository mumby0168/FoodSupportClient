import { createStore, combineReducers } from "redux";
import requestFormReducer from "./reducers/requestFormReducer";
import helpFormReducer from "./reducers/helpFormReducer";

const store = createStore(combineReducers(
    {
        requestForm: requestFormReducer,
        helpForm: helpFormReducer
    }
));


export default store;