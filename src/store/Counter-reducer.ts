export type CounterValueType = {
    counterValue: number
    startValue: number
    maxValue: number
    disabled: boolean
    error: boolean
}

const CHANGE_VALUE_COUNTER = 'CHANGE-VALUE-COUNTER';
const CLEAR_VALUE_COUNTER = 'CLEAR-VALUE-COUNTER';
const SET_START_VALUE_FOR_COUNTER = 'SET-START-VALUE-FOR-COUNTER';
const DISABLED_BUTTON = 'DISABLED-BUTTON';
const INPUT_START_VALUE_FOR_COUNTER = 'INPUT-START-VALUE-FOR-COUNTER';
const INPUT_MAX_VALUE_FOR_COUNTER = 'INPUT-MAX-VALUE-FOR-COUNTER';

export type InputMaxValueForCounterAT = {
    type: 'INPUT-MAX-VALUE-FOR-COUNTER';
    maxValue: number
}

export type InputStartValueForCounterAT = {
    type: 'INPUT-START-VALUE-FOR-COUNTER';
    startValue: number
}

export type SetStartValueForCounterAT = {
    type: 'SET-START-VALUE-FOR-COUNTER'
    startValue: number
}

export type ChangeValueCounterAT = {
    type: 'CHANGE-VALUE-COUNTER'
}

export type clearValueCounterAT = {
    type: 'CLEAR-VALUE-COUNTER'
    startValue: number

}
export type DisabledButtonAT = {
    type: 'DISABLED-BUTTON'
}

type ActionType = ChangeValueCounterAT
    | clearValueCounterAT
    | SetStartValueForCounterAT
    | DisabledButtonAT
    | InputStartValueForCounterAT
    | InputMaxValueForCounterAT

const initialState = {
    counterValue: 0,
    startValue: 0,
    maxValue: 0,
    disabled: false,
    error: false
}

export const CounterReducer = (state = initialState, action: ActionType): CounterValueType => {
    switch (action.type) {
        case CHANGE_VALUE_COUNTER:
            return {...state, counterValue: state.counterValue + 1}
        case CLEAR_VALUE_COUNTER:
            return {
                ...state,
                counterValue: action.startValue,
                maxValue: 0,
                startValue: 0,
                disabled: !state.disabled
            }

        case SET_START_VALUE_FOR_COUNTER:
            return (state.maxValue < state.startValue)
                ? {...state, error: true, disabled: true}
                : {...state, counterValue: action.startValue}

        case DISABLED_BUTTON:
            return {...state, disabled: true}


        case INPUT_START_VALUE_FOR_COUNTER:
            return (action.startValue < 0)
                ? {...state, error: true}
                : {...state, startValue: action.startValue}

        case INPUT_MAX_VALUE_FOR_COUNTER:
            return (action.maxValue < 0)
                ? {...state, error: true}
                : {...state, maxValue: action.maxValue}


        default:
            return state
    }

}


export const changeValueCounterAC = (): ChangeValueCounterAT => {
    return {
        type: CHANGE_VALUE_COUNTER
    }
}
export const clearValueCounterAC = (startValue: number): clearValueCounterAT => {
    return {type: CLEAR_VALUE_COUNTER, startValue}
}


export const setStartValueForCounterAC = (startValue: number): SetStartValueForCounterAT => {
    return {type: SET_START_VALUE_FOR_COUNTER, startValue}
}


export const disabledButtonAC = (): DisabledButtonAT => {
    return {type: DISABLED_BUTTON}
}
export const inputStartValueForCounterAC = (startValue: number): InputStartValueForCounterAT => {
    return {type: INPUT_START_VALUE_FOR_COUNTER, startValue}
}

export const inputMaxValueForCounterAC = (maxValue: number): InputMaxValueForCounterAT => {
    return {type: INPUT_MAX_VALUE_FOR_COUNTER, maxValue}
}