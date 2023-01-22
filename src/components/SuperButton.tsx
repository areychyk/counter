import React from 'react';

export type SuperButtonPropsType={
    title:string
    callback:()=>void
    error?:boolean
    className?:string
}

export const SuperButton = (props:SuperButtonPropsType) => {
    const onClickHandler=()=>{
        props.callback()
    }
    return (
        <button className={props.className} disabled={props.error} onClick={onClickHandler}>{props.title}</button>
    );
};

