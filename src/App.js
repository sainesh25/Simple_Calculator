import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';
import Answer from './components/Answer/Answer';

function App() {

    const [input, setInput] = useState({
        firstInput: '',
        secondInput: '',
    });


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    let number1 = input.firstInput;
    let number2 = input.secondInput;


    const [answer, setAnswer] = useState('');

    const handleAdd = () => {
        let answer_of_operation = +number1 + +number2
        setAnswer(`Addition of ${number1} and ${number2} is ${answer_of_operation}`);
        setInput({
            ...input,
            firstInput: '',
            secondInput: '',
        });
    }

    const handleSub = () => {
        let answer_of_operation = +number1 - +number2
        setAnswer(`Subtraction of ${number1} and ${number2} is ${answer_of_operation}`);
    }

    const handleMul = () => {
        let answer_of_operation = +number1 * +number2
        setAnswer(`Multiplication of ${number1} and ${number2} is ${answer_of_operation}`);
    }

    const handleDiv = () => {
        let answer_of_operation = +number1 / +number2
        setAnswer(`Dividation of ${number1} and ${number2} is ${answer_of_operation}`);
    }

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }


    return (
        <div className="App">
            <Heading>Simple Calculator</Heading>
            <Input placeholder='Enter no 1' name='firstInput' value={input.firstInput} onchange={handleChange} />
            <Input placeholder='Enter no 2' name='secondInput' value={input.secondInput} onchange={handleChange} />
            <Button onclick={handleAdd}>Add</Button>
            <Button onclick={handleSub}>Subtract</Button>
            <Button onclick={handleDiv}>Divide</Button>
            <Button onclick={handleMul}>Multiply</Button>

            <div >

                <Button onclick={handleInput} name='0' value='0'>0</Button>
                <Button onclick={handleInput} name='1' value='1'>1</Button>
                <Button onclick={handleInput} name='2' value='2'>2</Button>
                <Button onclick={handleChange} name='3' value='3'>3</Button>
                <Button onclick={handleAdd}>4</Button>
                <Button onclick={handleSub}>5</Button>
                <Button onclick={handleDiv}>6</Button>
                <Button onclick={handleMul}>7</Button>
                <Button onclick={handleMul}>8</Button>
                <Button onclick={handleMul}>9</Button>
            </div>

            <Answer>{answer}</Answer>
        </div>
    );
}

export default App;
