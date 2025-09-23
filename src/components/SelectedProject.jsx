import Tasks from "./Tasks.jsx";



export default function SelectedProject({
    project,
    onDelete,
    onAddTask,
    onDeleteTask,
    tasks,
    onToggleComplete,
}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="w-[35rem] mt-16  sm:w-[28rem] md:w-[35rem] md:mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300  sm:pb-4 sm:mb-4 ">
                <div className="flex items-center justify-between ">
                    <h1 className="text-3xl font-bold tracking-tight text-stone-600 mb-2  sm:text-3xl sm:mb-2">{project.title}</h1>
                    <button 
                    className="text-stone-600  p-1 rounded-md hover:bg-zinc-800 hover:text-stone-100 duration-300 tracking-tight "
                    onClick={onDelete}
                    >Delete</button>
                </div>
                <p className="mb-4 text-stone-400  sm:mb-4 ">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap  sm:text-base">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} onToggleComplete={onToggleComplete}/>
        </div>
    );
}
