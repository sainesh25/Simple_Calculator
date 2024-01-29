import React from 'react'
import Button from '../Button/Button';

export default function Keypad(props) {
    let handleInput = (e) => {
        props.btnClickFunc(e);
    }
    return (
        <>
            <div className="keypad">
                <div className="buttons">
                    <Button onclick={handleInput} name='add' value='+'>+</Button>
                    <Button onclick={handleInput} name='divide' value='/'>/</Button>
                    <Button onclick={handleInput} name='multiply' value='*'>*</Button>
                    <Button onclick={handleInput} name='subtract' value='-'>-</Button>
                    <Button onclick={handleInput} name='equals' value='='>=</Button>
                    <Button onclick={handleInput} name='clear' value='clear'>C</Button>
                    <Button onclick={handleInput} name='0' value='0'>0</Button>
                    <Button onclick={handleInput} name='1' value='1'>1</Button>
                    <Button onclick={handleInput} name='2' value='2'>2</Button>
                    <Button onclick={handleInput} name='3' value='3'>3</Button>
                    <Button onclick={handleInput} name='4' value='4'>4</Button>
                    <Button onclick={handleInput} name='5' value='5'>5</Button>
                    <Button onclick={handleInput} name='6' value='6'>6</Button>
                    <Button onclick={handleInput} name='7' value='7'>7</Button>
                    <Button onclick={handleInput} name='8' value='8'>8</Button>
                    <Button onclick={handleInput} name='9' value='9'>9</Button>
                </div>
            </div>
        </>
    )
}
