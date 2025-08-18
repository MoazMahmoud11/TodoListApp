
import {  useState } from "react";

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('');

    }

    return (
        <div className="flex items-center gap-4  sm:flex-row sm:items-center sm:gap-4">
            <input type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200 outline-sky-700 md:w-1/2" 
            onChange={ handleChange}
            value={enteredTask}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                handleClick(); 
                }
            }}
            />
            <button 
            className="text-stone-700 hover:text-stone-950  sm:border-0 sm:border-none"
            onClick={handleClick}
            >Add Task</button>
        </div>
    )
}