import React, { useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import '../02-useEffect/efect.css'
import { Small } from './Small';

export const Memorized = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorized</h1>
            <hr />
            <h2>Counter: <Small value={counter} /></h2>

            <button 
                className="btn btn-primary"
                onClick={ increment }
            > 
                +1 
            </button>   

            <button 
                className="btn btn-primary ml-3"
                onClick={()=> setShow(!show)}
            >
                show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
