import Button from "./Button.jsx";


export default function SideBar({
    title,
    onStartAddProject,
    projects,
    onSelectProject,
    selectedProjectId,}){

        return (
            <aside className=" h-lvh w-1/3 px-8 pt-16 pb-10 bg-stone-900
                text-stone-50 md:w-80 rounded-r-xl overflow-y-auto custom-scroll scrollbar-hide sm:w-3/5 sm:gap-1">
                <h2 className="mb-8 font-bold uppercase md:text-2xl text-stone-200 px-4 pb-4  " >{title}</h2>
                <div>
                    <Button onClick={onStartAddProject}>+ Add Project</Button>
                </div>
                <ul className="mt-2">
                    {projects.map( (project) => {
                        let cssClasses = "w-full mt-2 mb-1 hover:text-slate-50 py-3 px-4 rounded-sm hover:bg-zinc-800 duration-150 font-bold text-xl text-left ";

                        if(project.id === selectedProjectId){
                            cssClasses += ' bg-stone-800 text-stone-200'
                        }else {
                            cssClasses += ' text-slate-400'
                        }

                        return ( 
                        <li key={project.id}>
                            <button 
                            className={cssClasses}
                            onClick={() => onSelectProject( project.id)}
                            >{project.title}</button>
                        </li>
                    );
                    }
                        )}
                </ul>
            </aside>
        );
}

// {/* {project.map( (proj) => (
//     <ul className="p-4 mt-2 rounded-md hover:bg-zinc-800 duration-200 flex justify-start flex-col gap-y-1 text-xl">
//         <li key={proj.id} className="flex justify-between font-bold text-stone-300 ">{proj.title}</li>
//     </ul>
// ))} */}