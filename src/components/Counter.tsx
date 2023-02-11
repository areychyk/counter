import React, {useEffect} from 'react';

import {Setting} from "./Setting/Setting";
import s from './Counter.module.css'
import {ContentCounter} from "./ContentCounter/ContentCounter";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../store/store";




export const Counter = () => {




    const counter = useSelector<StoreType>(state => state.counter)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     let valueFromLocalStorage= localStorage.getItem('counterValue');
    //     if(valueFromLocalStorage){
    //         let newValue=JSON.parse(valueFromLocalStorage)
    //         setCounter({...counter,counterValue:newValue})
    //     }
    //
    // },[])


    // useEffect(()=>{
    //     localStorage.setItem('counterValue', JSON.stringify(counter.counterValue))
    // },[counter.counterValue])


    console.log(counter)



    return (
        <div className={s.wrapper}>
            <Setting/>
            <ContentCounter/>

        </div>
    );
};

