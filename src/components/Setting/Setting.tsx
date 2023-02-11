import React, {ChangeEvent} from 'react';

import s from '../Counter.module.css'
import {TextField} from "@mui/material";
import {SuperButton} from "../SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../store/store";
import {
    inputMaxValueForCounterAC,
    inputStartValueForCounterAC,
    setStartValueForCounterAC
} from "../../store/Counter-reducer";


export const Setting = () => {


    const startValue = useSelector<StoreType>(state => state.counter.startValue) as number
    const maxValue = useSelector<StoreType>(state => state.counter.maxValue) as number
    const dispatch = useDispatch()

    const inputStartValueForCounter = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(inputStartValueForCounterAC(+event.currentTarget.value))

    }

    const inputMaxValueForCounter = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(inputMaxValueForCounterAC(+event.currentTarget.value))

    }

    const setStartValueForCounterOnClick = () => {
        dispatch(setStartValueForCounterAC(startValue))


    }


    return (
        <div className={s.setting}>
            <div className={s.startValue}>
                <TextField type={'number'}
                           id="outlined-basic"
                           label="StartValue"
                           variant="outlined"
                           value={startValue}
                           onChange={inputStartValueForCounter}
                />

            </div>
            <div className={s.maxValue}>

                <TextField type={'number'}
                           id="outlined-basic"
                           label="MaxValue"
                           variant="outlined"
                           value={maxValue}
                           onChange={inputMaxValueForCounter}
                />
            </div>


            <SuperButton className={s.set} title={'SET'} callback={setStartValueForCounterOnClick}/>
        </div>
    );
};

