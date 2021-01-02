const initialState = [{
    id:1,
    tarea:'labar',
    completa:false
}]

const todoReduce = (state = initialState, accion) => {
    if(accion?.type == 'Agregar'){
        return [...state, accion.payload]
    }
    return state;
}


let todo = todoReduce();

const newTask = {
    id:2,
    name:'secar',
    completa: false,
}

let accion = {
    type:'Agregar',
    payload:newTask
}

todo = todoReduce(todo ,accion)

console.log(todo);

