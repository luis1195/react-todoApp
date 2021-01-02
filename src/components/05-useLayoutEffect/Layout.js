import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const state =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { data} = state;

    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({})

    //si data es falso no ejecuta el arreglo 0
    const { quote } = !!data && data[0];

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Layout</h1>
            <hr />

                <blockquote className="blockquote text-right">
                    <p 
                    className="mb-0"
                    ref={pTag}  
                    > 
                    { quote } 
                    
                    </p>
                </blockquote>

                <pre>
                    {JSON.stringify(boxSize, null, 3)}
                </pre>

            <button className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>
        </div>



    )
}
