import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            isCompleted: false
        }
    ],
    addTodo: (_todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () =>    useContext(TodoContext)

export const TodoProvider = TodoContext.Provider