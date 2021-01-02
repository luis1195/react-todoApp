import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputOnChange, reset] = useForm({
        description:''
    })

    const handleSubmit = (e) => {

        e.preventDefault();

        if(description.length <= 1){
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done:false
        }

        handleAddTodo(newTodo);
        reset();
    
    }

    return (
        <>
        <h4>Agregar TODO</h4>
        <hr/>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="description"
                placeholder="Aprender..."
                className="form-control"
                autoComplete="off"
                value={description}
                onChange={handleInputOnChange}
            />
            <button 
                className="btn btn-outline-primary mt-1 btn-block"
                type="submit"
            >
                Agregar
            </button>
            
        </form>
        </>
    )
}
