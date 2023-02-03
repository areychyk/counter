import {CounterValueType} from "../components/Counter";


const SET_START_VALUE_FOR_COUNTER = 'SET-START-VALUE-FOR-COUNTER'


export type SetStartValueForCounterAT = {
    type: 'SET-START-VALUE-FOR-COUNTER'
    startValue: number

}

type ActionType = SetStartValueForCounterAT


export const ContentCounterReducer = (state: CounterValueType, action: ActionType): CounterValueType => {
    switch (action.type) {
        case SET_START_VALUE_FOR_COUNTER:
            return (state.maxValue < state.startValue)
                ? {...state, error: true, disabled: true}
                : {...state, counterValue: action.startValue}

        default:
            return state
    }

}


export const setStartValueForCounterAC = (startValue: number): SetStartValueForCounterAT => {
    return {type: SET_START_VALUE_FOR_COUNTER, startValue}
}
