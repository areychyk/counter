import React, {ChangeEvent, useState} from 'react';
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


    console.log(counter)



    return (
        <div>
            <Setting counter={counter} setCounter={setCounter}/>
            <ContentCounter counter={counter} setCounter={setCounter}/>

        </div>
    );
};

