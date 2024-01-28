import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';

function App(props) {

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

    console.log(props);

    // const [operation, setOperation] = useState({
    //     add: +input.firstInput + +input.secondInput,
    //     sub: +input.firstInput - +input.secondInput,
    //     mul: +input.firstInput * +input.secondInput,
    //     div: +input.firstInput / +input.secondInput,
    // });

    const handleAdd = () => {
        console.log(+input.firstInput + +input.secondInput);
            
    }


    
    return (
        <div className="App">
            <Heading>Simple Calculator</Heading>
            <Input placeholder='Enter no 1' name='firstInput' value={input.firstInput} onchange={handleChange} />
            <Input placeholder='Enter no 2' name='secondInput' value={input.secondInput} onchange={handleChange} />
            <Button onclick={handleAdd}>Add</Button>
            <Button >Subtract</Button>
            <Button >Divide</Button>
            <Button >Multiply</Button>
            {/* <Button number1={input.firstInput} number2={input.secondInput} >Add</Button>
            <Button number1={input.firstInput} number2={input.secondInput} >Subtract</Button>
            <Button number1={input.firstInput} number2={input.secondInput} >Divide</Button>
            <Button number1={input.firstInput} number2={input.secondInput} >Multiply</Button> */}
            <p></p>
        </div>
    );
}

export default App;
