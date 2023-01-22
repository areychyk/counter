import React, {ChangeEvent, useEffect, useState} from 'react';
import {SuperButton} from "./SuperButton";
import {Setting} from "./Setting";
import s from './Counter.module.css'
import {ContentCounter} from "./ContentCounter";

export type CounterValueType = {
    counterValue: number
    startValue: number
    maxValue: number
    disabled: boolean
    error: boolean
}

export const Counter = () => {


    const [counter, setCounter] = useState<CounterValueType>({
        counterValue: 0,
        startValue: 0,
        maxValue: 0,
        disabled: false,
        error: false

    })

    useEffect(()=>{
        let valueFromLocalStorage= localStorage.getItem('counterValue');
        if(valueFromLocalStorage){
            let newValue=JSON.parse(valueFromLocalStorage)
            setCounter({...counter,counterValue:newValue})
        }

    },[])


    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(counter.counterValue))
    },[counter.counterValue])


    console.log(counter)



    return (
        <div className={s.wrapper}>
            <Setting counter={counter} setCounter={setCounter}/>
            <ContentCounter counter={counter} setCounter={setCounter}/>

        </div>
    );
};

