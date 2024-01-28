import React, { useState } from 'react'

export default function Button(props) {

    // let numberFirst = props.number1;
    // let numberSecond = props.number2;
    // let answer;

    // const handleCalculation = () => {

    //     switch (props.children) {
    //         case "Add":
    //             answer = +numberFirst + +numberSecond;
    //             break;

    //         case "Subtract":
    //             answer = +numberFirst - +numberSecond;
    //             break;

    //         case "Multiply":
    //             answer = +numberFirst * +numberSecond;
    //             break;

    //         case "Divide":
    //             answer = +numberFirst / +numberSecond;
    //             break;
    //     }
    // }

    return (
        <button onClick={props.onclick()}>{props.children}</button>
    )
}
