import React from 'react'

export default function Input(props) {

    return (
        <>
            {/* <input value={props.value} name={props.name} onChange={(e) => {props.onchange(e)} } type="text" placeholder={props.placeholder}/> */}
            <input value={props.value} onChange={(e) => {props.onchange(e)}} name={props.name} type="text" placeholder={props.placeholder} />
        </>
    )
}
