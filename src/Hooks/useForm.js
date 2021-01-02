import { useState } from "react"


export const useForm = (initialValues = {}) => {
    
    const [value, setValues] = useState(initialValues)

    const reset = () =>{
        setValues(initialValues)
    }

    const handleInputOnChange = ({target}) =>{
        setValues({
            ...value,
            [target.name] : target.value
        })
    }

    return [
        value,
        handleInputOnChange,
        reset
    ];
        
    
}
