import React from 'react';

export type SuperButtonPropsType={
    title:string
    callback:()=>void
    error?:boolean
}

export const SuperButton = (props:SuperButtonPropsType) => {
    const onClickHandler=()=>{
        props.callback()
    }
    return (
        <button disabled={props.error} onClick={onClickHandler}>{props.title}</button>
    );
};

