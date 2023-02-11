import {combineReducers, legacy_createStore} from "redux";
import {CounterReducer} from "./Counter-reducer";



const reducers = combineReducers({
    counter:CounterReducer,

})

export const store = legacy_createStore(reducers)

export type StoreType= ReturnType<typeof reducers>


// @ts-ignore
window.store = store
