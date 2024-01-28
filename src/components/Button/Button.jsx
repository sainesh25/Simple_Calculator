import React, { useState } from 'react'

export default function Button(props) {


    return (
        <button onClick={(e) => {props.onclick(e)}} value={props.value}>{props.children}</button>
    )
}
