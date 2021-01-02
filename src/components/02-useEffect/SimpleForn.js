import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';

export const SimpleForn = () => {

    const [state, setState] = useState({
        name:'',
        email:''
    })
    const { name, email } = state;

    useEffect(()=>{
        console.log('hey')
    }, [])

    const handleOnchange = ({target})=>{
        setState({
            ...state,
            [target.name]: target.value
        })
    }
    return (
        <> 
            <h1>Effect</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleOnchange}
                />

                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="@gmail"
                    autoComplete="off"
                    value={email}
                    onChange={handleOnchange}
                />

                {
                    name == '123' && (
                        <Message />
                    )
                }

            </div>

            
        </>
    )
}
