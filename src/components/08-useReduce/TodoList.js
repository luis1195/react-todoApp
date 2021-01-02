import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleDelete,handleToogle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) =>(
                    <TodoListItem
                        key={todo.id}
                        index={i}
                        handleDelete={handleDelete}
                        handleToogle={handleToogle}
                        todo={todo}
                    />
                ))
            }
        </ul>
    )
}