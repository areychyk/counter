import React, {ChangeEvent} from 'react';
import {SuperButton} from "./SuperButton";
import {CounterValueType} from "./Counter";

export type SettingPropsType = {
    counter: CounterValueType
    setCounter: (counter: CounterValueType) => void
}

export const Setting = (props: SettingPropsType) => {

    const inputStartValueForCounter = (event: ChangeEvent<HTMLInputElement>) => {
        if(+event.currentTarget.value<0){
            props.setCounter({...props.counter,error:true})
        }else{
            props.setCounter({...props.counter,startValue:+event.currentTarget.value})
        }

    }

    const inputSMaxValueForCounter = (event: ChangeEvent<HTMLInputElement>) => {
        if(+event.currentTarget.value<0){
            props.setCounter({...props.counter,error:true})
        }else{
            props.setCounter({...props.counter,maxValue:+event.currentTarget.value})
        }

    }

    const setStartValueForCounterOnClick = () => {
        if(props.counter.maxValue<props.counter.startValue){
            props.setCounter({...props.counter,error:true,disabled:true})
        }else{
            props.setCounter({...props.counter,counterValue:props.counter.startValue})
        }

    }



    return (
        <div>
            <div>
                <span>StartValue</span>
                <input type={'number'}
                       value={props.counter.startValue}
                       onChange={inputStartValueForCounter}
                />
            </div>
            <div>
                <span>MaxValue</span>
                <input type={'number'}
                       value={props.counter.maxValue}
                       onChange={inputSMaxValueForCounter}
                />
            </div>


            <SuperButton title={'SET'} callback={setStartValueForCounterOnClick}/>
        </div>
    );
};

