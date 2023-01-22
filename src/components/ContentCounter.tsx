import React, {useEffect} from 'react';
import {SuperButton} from "./SuperButton";
import s from "./Counter.module.css";
import {CounterValueType} from "./Counter";


export type ContentCounterPropsType = {
    counter: CounterValueType
    setCounter: (counter: CounterValueType) => void
}

export const ContentCounter = (props:ContentCounterPropsType) => {

useEffect(()=>{
    if(props.counter.maxValue>0 && props.counter.counterValue>0 && props.counter.counterValue>=props.counter.maxValue){
        props.setCounter({...props.counter,disabled:true})
    }

},[props.counter.counterValue])
    const changeValueCounter = () => {
            props.setCounter({...props.counter,counterValue:props.counter.counterValue+1})

        // const changeValueCounter = () => {
        //     if(props.counter.maxValue>0 && props.counter.counterValue>0 && props.counter.counterValue>=props.counter.maxValue ){
        //         props.setCounter({...props.counter,disabled:true})
        //     }else{
        //         props.setCounter({...props.counter,counterValue:props.counter.counterValue+1})
        //     }

    }
    const clearValueCounter = () => {
        props.setCounter({...props.counter,counterValue:props.counter.startValue, disabled:false, maxValue:0,startValue:0})
    }

    let classValueOnWindow=props.counter.disabled? s.valueWindow + ' ' + s.stop : s.valueWindow;
let classDisabled_plusOneButton=props.counter.disabled? s.plusOneButton : ' '
let classDisabled_clearButton=props.counter.disabled? s.clearButton : ' '
    return (

            <div className={s.contentCounter}>
                <div className={classValueOnWindow}>{props.counter.counterValue}</div>
                <div className={s.block_buttons_content_container}>
                    <SuperButton
                        className={classDisabled_plusOneButton}
                        error={props.counter.disabled}
                        title={'+1'}
                        callback={changeValueCounter}
                    />
                    <SuperButton
                        className={classDisabled_clearButton}
                        // error={!props.counter.disabled}
                        title={'clear'}
                        callback={clearValueCounter}
                    />
                </div>

            </div>

    );
};

