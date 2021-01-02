import React, { useReducer, useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { todoReduce } from './todoReduce';
import './todo.css';

// const initialStat = [{
//     id: new Date().getTime(),
//     desc:'curso React',
//     done:false
// }]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReduce, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = ( idTodo ) =>{
        const action = {
            type:'delete',
            payload:idTodo
        }

        dispatch( action );
    }

    const handleToogle = (idTodo) => {
        dispatch({
            type:'toogle',
            payload:idTodo
        })
    }

    const handleAddTodo = ( newTodo) => {
        dispatch({
            type:'add',
            payload:newTodo
        })

    }

    return (
        <div>
            <h1>Todo ({todos.length})</h1>
            <hr/>

            <div className="row">

                <div className="col-7">

                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToogle={handleToogle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}    
                    />

                </div>


            </div>

            
        </div>
    )
}
