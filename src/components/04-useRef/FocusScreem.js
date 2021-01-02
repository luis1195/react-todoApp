import React, { useRef } from 'react'
import '../02-useEffect/efect.css'

export const FocusScreem = () => {

    const inputRef = useRef()
    const handleRef = ()=>{
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screem</h1>
            <hr/>

            <input 
                className="form-control"
                ref={inputRef}
                placeholder="tu nombre"
            />
            
            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleRef}
            >
               Focus 
            </button>
        </div>
    )
}
