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
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '2':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '3':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '4':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '5':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '6':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '7':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '8':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '9':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '0':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '+':
                if (operation == '') {
                    setInput({ ...input, firstInput: input.firstInput });
                } else {

                    setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                }
                break;
            case '*':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '/':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '-':
                setInput(input => eval({ firstInput: input.firstInput + e.target.value }));
                break;
            case '=':
                setInput({ ...input, firstInput: '', answerBar: eval(input.firstInput) });
                // setInput({...input, firstInput:'' , })
                break;
            case 'clear':
                setInput({ ...input, firstInput: '', answerBar: '' });
                break;

            default:
                break;
        }
    }




    return (
        <div className="App w-96 flex flex-col justify-center items-center">
            <div className='calculator w-96 flex flex-col justify-center items-center p-8 bg-gray-900 rounded'>
                <Heading className='text-3xl font-light	text-blue-400'>Calculator</Heading>
                <Input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 outline-none' borderRad='rounded-b-none' placeholder='Enter no' name='firstInput' value={operation} onchange={handleChange} />
                <Input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 outline-none'  borderRad='rounded-t-none' name='answerBar' value={input.answerBar} />

                <div >
                    <Keypad btnClickFunc={handleInput} />
                </div>

                <Answer></Answer>

            </div>
        </div>
    );
}

export default App;
