import NewTask from "./NewTask.jsx";

export default function Tasks({tasks,onAdd,onDelete}) {
    return (
        <section className="sm:px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-stone-700 mb-4  sm:text-2xl sm:text-left">Tasks</h2>
            <NewTask onAdd={onAdd} /> 
            {tasks.length === 0 && (<p className="text-stone-800 my-4  sm:text-base sm:text-left">
                This project does not have any tasks yet.
                </p>
                )}
            {tasks.length > 0 && (<ul className="p-4 mt-8 rounded-md bg-stone-100 sm:p-4 sm:mt-8">
                {tasks.map( (task) => {
                    return (
                        <li key={task.id} className="flex justify-between my-4  sm:justify-between sm:items-center sm:my-4">
                            <span className="whitespace-pre-wrap  sm:text-base mb-2 sm:mb-0">{task.text}</span>
                            <button 
                            onClick={ () => onDelete(task.id)}
                            className="text-stone-700 hover:text-red-500  sm:text-base"
                            >Clear</button>
                        </li>
                    );
                })}
            </ul>)}
            
        </section> 
    );
}