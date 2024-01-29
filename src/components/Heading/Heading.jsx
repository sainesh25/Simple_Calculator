import React from 'react'

export default function Heading(props) {
    return (
        <h1 className={props.className}>{props.children}</h1>
    )
}
