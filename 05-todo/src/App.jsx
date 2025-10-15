import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [taskList, setTaskList] = useState([{id: uuidv4(), taskText:"Sample Task"}]);
  const [newTask, setNewTask] = useState("");

  function HandleChange(e) {
    setNewTask(e.target.value);
  }
  // console.log(Task);
  let AddTask = () => {
    const t = newTask.trim();
    if(!t) return;
    // console.log("Clicked");
    setTaskList((prevTask) => {
      return [...prevTask, {id:uuidv4(), taskText: t}];
    })
    // setTask([...Task, {id:uuidv4(), task: t}]);
    setNewTask("");
  };

  function HandleKeyDown(e){
    if(e.key === 'Enter'){
      AddTask();
    }
  }

  const DeleteTask = (id) =>{
    // console.log(id);
    // console.log("Deleted");
    setTaskList((prevTask) => prevTask.filter((task) => task.id != id))
  }

  return (
    <div className="App bg-slate-200 min-h-screen flex flex-col items-center pt-10">
      <div className="flex flex-col items-center gap-6 bg-slate-300 p-10 rounded-lg shadow-xl shadow-slate-300">
        <h1 className="text-slate-900 text-3xl font-bold">To Dooy</h1>

        {/* Input Section */}
        <div className="flex gap-4 mt-4 justify-between bg-white py-8 px-4 rounded-lg min-w-xl shadow-xl shadow-slate-300">
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={HandleChange}
            onKeyDown={HandleKeyDown}
            className="p-2 bg-slate-200 outline-slate-900 rounded-lg w-[100%]"
          />
          <button
            onClick={AddTask}
            className="border-0 rounded-lg px-6 py-1 bg-sky-500 text-black"
          >
            Save
          </button>
        </div>

        {/* Task List */}
        <div className="mt-10 bg-white p-4 rounded-lg min-w-xl shadow-xl shadow-slate-300 w-96">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Tasks</h2>
          <ul className="flex flex-col gap-4">
            {taskList.map((task) => (
              <li key={task.id} className="flex justify-between items-center bg-slate-200 p-2 rounded-lg">
                <span>{task.taskText}</span>
                <button onClick= { () => DeleteTask(task.id)} className="border-0 rounded-md text-sm px-4 py-2 bg-red-600 text-white">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
