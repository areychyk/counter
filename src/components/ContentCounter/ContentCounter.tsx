import React, {useEffect} from 'react';
import {SuperButton} from "../SuperButton/SuperButton";
import s from "../Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../store/store";
import {changeValueCounterAC, clearValueCounterAC, disabledButtonAC} from "../../store/Counter-reducer";



export const ContentCounter = () => {

    const startValue = useSelector<StoreType>(state => state.counter.startValue) as number
    const maxValue = useSelector<StoreType>(state => state.counter.maxValue) as number
    const counterValue = useSelector<StoreType>(state => state.counter.counterValue) as number
    const disabled = useSelector<StoreType>(state => state.counter.disabled) as boolean
    const dispatch = useDispatch()



    useEffect(() => {
    if (maxValue > 0 && counterValue > 0 && counterValue >= maxValue) {
        dispatch(disabledButtonAC())
    }
    }, [counterValue])



    const changeValueCounter = () => {
        dispatch(changeValueCounterAC())

    }

    const clearValueCounter = () => {
        dispatch(clearValueCounterAC(4))
    }


    let classValueOnWindow = disabled ? s.valueWindow + ' ' + s.stop : s.valueWindow;
    let classDisabled_plusOneButton = disabled ? s.plusOneButton : ' '
    let classDisabled_clearButton = disabled ? s.clearButton : ' '


    return (

        <div className={s.contentCounter}>
            <div className={classValueOnWindow}>{counterValue}</div>
            <div className={s.block_buttons_content_container}>
                <SuperButton
                    className={classDisabled_plusOneButton}
                    error={disabled}
                    title={'+1'}
                    callback={changeValueCounter}
                />
                <SuperButton
                    className={classDisabled_clearButton}
                    error={!disabled}
                    title={'clear'}
                    callback={clearValueCounter}
                />
            </div>

        </div>

    );
};

