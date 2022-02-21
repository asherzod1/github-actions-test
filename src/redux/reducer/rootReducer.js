import {combineReducers} from "redux";
import CounterReducer from "./CounterReducer";


export const  rootReducer=combineReducers({
    counter: CounterReducer
})