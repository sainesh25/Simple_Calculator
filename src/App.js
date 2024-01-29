import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';
import Answer from './components/Answer/Answer';

function App() {

    const [input, setInput] = useState({
        firstInput: '',
        answerBar: ''
    });


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: eval(e.target.value),
        });
    }

    let operation = input.firstInput;
    console.log(operation);


    const handleInput = (e) => {
        switch (e.target.value) {
            case '1':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '2':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '3':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '4':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '5':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '6':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '7':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '8':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '9':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '0':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '+':
                if(operation == ''){
                    setInput({...input, firstInput: input.firstInput});
                }else{

                    setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                }
                break;
            case '*':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '/':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '-':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value}));
                break;
            case '=':
                setInput({...input, firstInput:'' ,answerBar: eval(input.firstInput)});
                // setInput({...input, firstInput:'' , })
                break;
            case 'clear':
                setInput({...input, firstInput: '', answerBar: ''});
                break;
                
            default:
                break;
        }
    }


    

    return (
        <div className="App">
            <Heading>Simple Calculator</Heading>
            <Input placeholder='Enter no 1' name='firstInput' value={operation} onchange={handleChange} />
            <Input placeholder='Answer' name='answerBar' value={input.answerBar} />
            <Button onclick={handleInput} name='add' value='+'>+</Button>
            <Button onclick={handleInput} name='divide' value='/'>/</Button>
            <Button onclick={handleInput} name='multiply' value='*'>*</Button>
            <Button onclick={handleInput} name='subtract' value='-'>-</Button>
            <Button onclick={handleInput} name='equals' value='='>=</Button>
            <Button onclick={handleInput} name='clear' value='clear'>C</Button>

            <div >

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

            <Answer></Answer>
        </div>
    );
}

export default App;
