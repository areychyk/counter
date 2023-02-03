import {CounterValueType} from "../components/Counter";


const CHANGE_VALUE_COUNTER='CHANGE-VALUE-COUNTER';
const CLEAR_VALUE_COUNTER = 'CLEAR-VALUE-COUNTER'

export type ChangeValueCounterAT={
    type:'CHANGE-VALUE-COUNTER'
}
export type clearValueCounterAT={
    type:'CLEAR-VALUE-COUNTER'
    startValue:number

}

type ActionType= ChangeValueCounterAT | clearValueCounterAT


export const ContentCounterReducer=(state:CounterValueType,action:ActionType):CounterValueType=>{
    switch (action.type){
        case CHANGE_VALUE_COUNTER:
            return  {...state, counterValue: state.counterValue + 1}
        case CLEAR_VALUE_COUNTER:
            return {...state, counterValue: action.startValue, disabled:false}
        default:
            return state
    }

}






export const changeValueCounterAC = ():ChangeValueCounterAT=>{
    return {
        type:CHANGE_VALUE_COUNTER
    }
}
export const clearValueCounterAC = (startValue:number):clearValueCounterAT=>{
    return {type:CLEAR_VALUE_COUNTER, startValue}
}
