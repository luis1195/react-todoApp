import React from 'react'

export const Small = React.memo(({value}) => {

    console.log("me volvi a renderizar")
    return (
        <div>
            <small>{value}</small>
        </div>
    )
})
