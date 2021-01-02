import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();
    return (
        
        <div>
            <h1>Counter With Custom { state }</h1>
            <hr/>
             <button  onClick={ ()=> increment(1) } className='btn btn-primary'>
                +1
             </button>
             <button onClick={ ()=> decrement(3) } className='btn btn-danger'>
                 -1
             </button>
             <button onClick={ reset } className='btn btn-danger'>
                 Reset
             </button>
            
        </div>
    )
}
