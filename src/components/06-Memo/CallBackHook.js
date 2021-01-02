import React, { useCallback, useState } from 'react'
import '../02-useEffect/efect.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementar = useCallback((num) => {
        setCounter( c => c + num );
    },[setCounter]);

    return (
        <div>
            <h1>CallBack Hook : {counter}</h1>
            <hr/>

           <ShowIncrement 
            incrementar={incrementar}
           />

        </div>
    )
}
