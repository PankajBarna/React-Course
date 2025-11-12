import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }


    return (
        <div className="flex w-full min-w-0 items-center">
            <div
                className={`flex w-full border items-center border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm duration-300 
      text-black ${todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
            >
                <input
                    type="checkbox"
                    className="cursor-pointer shrink-0"
                    checked={todo.isCompleted}
                    onChange={toggleCompleted}
                    disabled={isTodoEditable}
                />

                {isTodoEditable ? (
                    <textarea
                        className={`flex-1 min-w-0 resize-none border outline-none bg-transparent rounded-lg whitespace-normal 
          ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
          ${todo.isCompleted ? "line-through" : ""}`}
                        value={todoMsg}
                        onChange={(e) => setTodoMsg(e.target.value)}
                    />
                ) : (
                    <p className={`flex-1 min-w-0 whitespace-normal ${todo.isCompleted ? "line-through" : ""}`}>
                        {todoMsg}
                    </p>
                )}

                <div className="flex gap-2 shrink-0 items-center">
                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => {
                            if (todo.isCompleted) return;
                            if (isTodoEditable) editTodo();
                            else setIsTodoEditable((prev) => !prev);
                        }}
                        disabled={todo.isCompleted}
                    >
                        {isTodoEditable ? "📁" : "✏️"}
                    </button>

                    <button
                        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        ❌
                    </button>
                </div>
            </div>
        </div>


    );
}

export default TodoItem;
