import React from 'react';
import {SuperButton} from "./SuperButton";
import s from "./Counter.module.css";
import {CounterValueType} from "./Counter";


export type ContentCounterPropsType = {
    counter: CounterValueType
    setCounter: (counter: CounterValueType) => void
}

export const ContentCounter = (props:ContentCounterPropsType) => {


    const changeValueCounter = () => {
        if(props.counter.maxValue>0 && props.counter.counterValue>0 && props.counter.counterValue>=props.counter.maxValue ){
            props.setCounter({...props.counter,disabled:true})
        }else{
            props.setCounter({...props.counter,counterValue:props.counter.counterValue+1})
        }





    }
    const clearValueCounter = () => {
        props.setCounter({...props.counter,counterValue:props.counter.startValue, disabled:false, maxValue:0,startValue:0})
    }

    let classStopForMaxValue=props.counter.disabled? s.stop : ""

    return (

            <div>
                <div className={classStopForMaxValue}>{props.counter.counterValue}</div>
                <SuperButton
                    error={props.counter.disabled}
                    title={'+1'}
                    callback={changeValueCounter}
                />
                <SuperButton
                    // error={!props.counter.disabled}
                    title={'clear'}
                    callback={clearValueCounter}
                />
            </div>

    );
};

