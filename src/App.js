import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';
import Answer from './components/Answer/Answer';
import Keypad from './components/Keypad/Keypad';

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
            
            <div >
                <Keypad btnClickFunc={handleInput}/>

            </div>

            <Answer></Answer>
        </div>
    );
}

export default App;
