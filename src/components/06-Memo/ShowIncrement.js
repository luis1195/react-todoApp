import React from 'react'

export const ShowIncrement = React.memo(({incrementar}) => {

    console.log("otra vez tu...")
    return (
        <div>
             <button 
                className="btn btn-primary"
                onClick={()=>incrementar(5)}
            >
                Incrementar
            </button>
        </div>
    )
})
