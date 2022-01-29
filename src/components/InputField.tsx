import React from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
    addTodo: ( e: React.FormEvent ) => void;
}

const InputField : React.FC<Props> = ( { todo, setTodo, addTodo } ) => {
    return (
        <form onSubmit={addTodo} className='input'>
            <input onChange={ e => setTodo(e.target.value) } className='input-box' type="text" placeholder='Enter a task' value={todo} />
            <button type='submit' className='input-submit'>Go</button>
        </form>
    )
}

export default InputField;
