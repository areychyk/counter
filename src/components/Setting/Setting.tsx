import React, {ChangeEvent} from 'react';
import {CounterValueType} from "../Counter";
import s from '../Counter.module.css'
import {TextField} from "@mui/material";
import {SuperButton} from "../SuperButton/SuperButton";

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
        <div className={s.setting}>
            <div className={s.startValue}>
                {/*<span>StartValue</span>*/}
                <TextField  type ={'number'}
                            id="outlined-basic"
                            label="StartValue"
                            variant="outlined"
                            value={props.counter.startValue}
                            onChange={inputStartValueForCounter}
                />

            </div>
            <div className={s.maxValue}>

                <TextField  type ={'number'}
                            id="outlined-basic"
                            label="MaxValue"
                            variant="outlined"
                            value={props.counter.maxValue}
                            onChange={inputSMaxValueForCounter}
                />
            </div>


            <SuperButton className={s.set} title={'SET'} callback={setStartValueForCounterOnClick}/>
        </div>
    );
};

