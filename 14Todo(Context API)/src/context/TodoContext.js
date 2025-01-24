import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "todo msg",
            completed: false,

        }  
        // Todo structure 
    ],
    addTodo: (todo)=>{},
    toggleTodo: (id)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
})


export const useTodo = () =>{
 return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider