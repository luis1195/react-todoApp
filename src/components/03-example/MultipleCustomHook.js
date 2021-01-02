import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import '../02-useEffect/efect.css'

export const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1);

    const state =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { loading, data} = state;

    //si data es falso no ejecuta el arreglo 0
    const { author, quote} = !!data && data[0];

    console.log(data)

    return (
        <div>
            <h1>Multiple Custom Hooks</h1>
            <hr />

            {
                loading 
                ?
                    (
                        <div className='alert alert-info text-center'>Loading...</div>
                    )
                    
                :
                     (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> { quote } </p>

                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                     )   
                    
            }
            <button className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente quote
            </button>
        </div>



    )
}
