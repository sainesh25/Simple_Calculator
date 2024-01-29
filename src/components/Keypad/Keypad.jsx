import React from 'react'
import Button from '../Button/Button';

export default function Keypad(props) {
    let handleInput = (e) => {
        props.btnClickFunc(e);
    }
    let buttonClasses = ' bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-1 grow w-16 h-16 border';
    return (
        <>
            <div className="keypad my-4">
                <div className="buttons flex">
                    <Button className={buttonClasses} onclick={handleInput} name='add' value='+'>+</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='divide' value='/'>/</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='multiply' value='*'>*</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='subtract' value='-'>-</Button>
                </div>
                <div className="buttons">
                    <Button className={buttonClasses} onclick={handleInput} name='equals' value='='>=</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='clear' value='clear'>C</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='0' value='0'>0</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='1' value='1'>1</Button>

                </div>
                <div className="buttons">
                    <Button className={buttonClasses} onclick={handleInput} name='2' value='2'>2</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='3' value='3'>3</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='4' value='4'>4</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='5' value='5'>5</Button>

                </div>
                <div className="buttons">
                    <Button className={buttonClasses} onclick={handleInput} name='6' value='6'>6</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='7' value='7'>7</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='8' value='8'>8</Button>
                    <Button className={buttonClasses} onclick={handleInput} name='9' value='9'>9</Button>
                </div>
            </div>
        </>
    )
}
