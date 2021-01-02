import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../Hooks/useCounter'
import '../02-useEffect/efect.css'
import { Small } from './Small';

export const MemorizeHook = () => {

    const {counter, increment} = useCounter(300);
    const [show, setShow] = useState(true)

    

    const useMemoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>MemoHooks</h1>
            <hr />
            <h2>Counter: {counter} </h2>
            <p>{useMemoProcesoPesado}</p>

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
