
import {
    changeValueCounterAC,
    clearValueCounterAC,
    CounterReducer,
    CounterValueType,
    setStartValueForCounterAC
} from "./Counter-reducer";



test('change value in counter',()=>{
    const state:CounterValueType={
        counterValue: 0,
        startValue: 0,
        maxValue: 0,
        disabled: false,
        error: false
    }

    const action = changeValueCounterAC()
    const endState = CounterReducer(state,action)


    expect(endState.counterValue).toBe(1)
    expect(endState.startValue).toBe(0)

})


test('clear value in counter and disabled button is false',()=>{
    const state:CounterValueType={
        counterValue: 0,
        startValue: 0,
        maxValue: 0,
        disabled: true,
        error: false
    }

    const action = clearValueCounterAC(2)
    const endState = CounterReducer(state,action)


    expect(endState.counterValue).toBe(2)
    expect(endState.startValue).toBe(0)
    expect(endState.disabled).toBeFalsy()

})




test('set start value for counter',()=>{
    const state:CounterValueType={
        counterValue: 0,
        startValue: 0,
        maxValue: 0,
        disabled: false,
        error: false
    }

    const action = setStartValueForCounterAC(2)
    const endState = CounterReducer(state,action)


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
    const endState = CounterReducer(state,action)


    expect(endState.counterValue).toBe(0)
    expect(endState.startValue).toBe(10)
    expect(endState.disabled).toBeTruthy()
    expect(endState.error).toBe(true)

})