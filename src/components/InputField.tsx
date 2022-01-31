import React, { useRef } from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
    addTodo: ( e: React.FormEvent ) => void;
}

const InputField : React.FC<Props> = ( { todo, setTodo, addTodo } ) => {
    const inputBoxRef = useRef<HTMLInputElement>(null);
    return (
        <form 
            onSubmit={(e) => {
                addTodo(e);
                inputBoxRef.current?.blur();
            }}
            className='input'
        >
            <input ref={inputBoxRef} onChange={ e => setTodo(e.target.value) } className='input-box' type="text" placeholder='Enter a task' value={todo} />
            <button type='submit' className='input-submit'>Go</button>
        </form>
    )
}

export default InputField;
