import React, { useState } from 'react'
import '../02-useEffect/efect.css'
import { MultipleCustomHook } from '../03-example/MultipleCustomHook'

export const RealExampleRef = () => {

    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Real Example</h1>
            <hr />

            {show && <MultipleCustomHook />}

            <button 
            className="btn btn-primary mt-5"
            onClick={()=> setShow(!show)}
            >
                show/hidden
            </button>
        </div>
    )
}
