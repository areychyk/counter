import {CounterValueType} from "../components/Counter";
import {ContentCounterReducer, setStartValueForCounterAC} from "./Setting-reducer";


test('set start value for counter',()=>{
    const state:CounterValueType={
        counterValue: 0,
        startValue: 0,
        maxValue: 0,
        disabled: false,
        error: false
    }

    const action = setStartValueForCounterAC(2)
    const endState = ContentCounterReducer(state,action)


    expect(endState.counterValue).toBe(2)
    expect(endState.startValue).toBe(0)
    expect(endState.disabled).toBeFalsy()
    expect(endState.error).toBeFalsy()

})


test('check maxValue and startValue for disabled and error',()=>{
    const state:CounterValueType={
        counterValue: 0,
        startValue: 10,
        maxValue: 1,
        disabled: false,
        error: false
    }

    const action = setStartValueForCounterAC(2)
    const endState = ContentCounterReducer(state,action)


    expect(endState.counterValue).toBe(0)
    expect(endState.startValue).toBe(10)
    expect(endState.disabled).toBeTruthy()
    expect(endState.error).toBe(true)

})