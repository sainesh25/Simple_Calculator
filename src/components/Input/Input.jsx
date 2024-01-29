import React from 'react'

export default function Input(props) {

    return (
        <>
            <input className={`${props.className} ${props.borderRad}`} value={props.value} onChange={(e) => {props.onchange(e)}} name={props.name}  type="text" placeholder={props.placeholder} readOnly/>
        </>
    )
}
