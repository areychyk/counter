
import {CounterValueType} from "../components/Counter";
import {changeValueCounterAC, clearValueCounterAC, ContentCounterReducer} from "./ContentCounter-reducer";


test('change value in counter',()=>{
    const state:CounterValueType={
        counterValue: 0,
        startValue: 0,
        maxValue: 0,
        disabled: false,
        error: false
    }

    const action = changeValueCounterAC()
    const endState = ContentCounterReducer(state,action)


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
    const endState = ContentCounterReducer(state,action)


    expect(endState.counterValue).toBe(2)
    expect(endState.startValue).toBe(0)
    expect(endState.disabled).toBeFalsy()

})