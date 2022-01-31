import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo : React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit]);
    

    const todoDone = ( todo : Todo ) => {
        setTodos( todos.map( t => t.id === todo.id ? { ...t, isDone : !t.isDone } : t ) )
    }

    const deleteTodo = ( todo : Todo ) => {
        setTodos( todos.filter( t => todo.id !== t.id ) )
    }

    const todoEdit = ( todo: Todo ) => {
        if(  ! edit && !todo.isDone ) {
            setEdit(!edit)
        }
    }

    const changeTodo = ( e : React.FormEvent, todo: Todo ) => {
        e.preventDefault();

        setTodos(todos.map( t => t.id === todo.id ? { ...t, todo: editTodo } : t ))

        console.log('asdasd');
        
        setEdit(false)
    }

    return (
        <form className='todos-single' onSubmit={ e => changeTodo(e ,todo)}>

            {
                edit  ?
                (    <input ref={inputRef} className='todos-single-text' value={editTodo} onChange={ ( e ) => setEditTodo(e.target.value) } />
                ) : (
                    todo.isDone ?
                    (
                        <s className='todos-single-text'>{todo.todo}</s>
                    ) : (
                        <span className='todos-single-text'>
                            {todo.todo}
                        </span>
                    )
                )
            }
            
            <div>
                <span
                    onClick={ () => todoEdit(todo) }
                    className='icon'>
                    <AiFillEdit />
                </span>
                <span
                    onClick={ () => deleteTodo(todo)  }
                    className='icon'>
                    <AiFillDelete />
                </span>
                <span  
                    onClick={ () => todoDone(todo) }
                    className='icon'>
                    <MdDone />
                </span>
            </div>
        </form>
    );
}

export default SingleTodo;
