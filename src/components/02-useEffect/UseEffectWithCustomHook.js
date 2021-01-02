import React, { useEffect } from 'react'
import { useForm } from '../../Hooks/useForm';
import './efect.css'

export const UseEffectWithCustomHooks = () => {

    const [value, handleInputOnChange] = useForm({
        name:'',
        email:'',
        password:''
    })
    const { name, email, password } = value;

    useEffect(()=>{
        console.log('el email cambio')
    }, [email])

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(value)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <h1>WithCustomHooks</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputOnChange}
                />

                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="@gmail"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputOnChange}
                />

                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    value={password}
                    onChange={handleInputOnChange}
                />

                <button className='btn btn-primary' type='submit'>Guardar</button>


            </div>

            
        </form>
    )
}
