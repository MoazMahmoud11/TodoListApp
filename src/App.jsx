import { useState, useEffect } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SideBar from "./components/SideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import NewProject from "./components/newProject.jsx";


function App() {
    // const[projectsState, setProjectsState] = useState({
    //   selectedProjectId: undefined,
    //   projects: [],
    //   tasks: [],
    // });
    const [projectsState, setProjectsState] = useState(() => {
        const saved = localStorage.getItem("projectsState");
        return saved
            ? JSON.parse(saved)
            : { selectedProjectId: undefined, projects: [], tasks: [] };
    });

    useEffect(() => {
        localStorage.setItem("projectsState", JSON.stringify(projectsState));
    }, [projectsState]);

    // Handlers
    function handleAddTask(text) {
        setProjectsState((prevState) => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            };
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks],
            };
        });
    }

    function handleDeleteTask(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id), // because of deleting all array in memory => [] no
            };
        });
    }

    function handleSelectProject(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleStartAddProject() {
        // Update Project State
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleCancelAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handelDeleteProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => {
                    return project.id !== prevState.selectedProjectId;
                }), // because of deleting all array in memory => [] no
            };
        });
    }

    const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
    ); // true Or false

    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handelDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks}
        />
    );

    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
        );
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    }

    return (
        <main className="my-8 h-screen flex gap-8">
            {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
            <SideBar
                title="Your Projects"
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectsState.selectedProjectId}
            />
            {/* <Tasks tasks="Task one"/> */}
            {content}
        </main>
    );
}

export default App;

{
    /* <button className=" w-fit rounded-tr-2xl rounded-bl-2xl left-96 top-10 absolute p-10 bg-gradient-to-tr from-cyan-500 via-violet-800 to-blue-800
  font-bold text-2xl text-amber-50 drop-shadow-2xl hover:bg-gradient-to-r hover:from-black hover:to-slate-400
  z-10 hover:transition-all first-letter:text-teal-300 ">how to add gradient</button> */
}

// * The First easily solution of my but the best is to initialize id, project[] arr in the State.
// const [isCreatingProject, setIsCreatingProject] = useState(false);

// function handleStartProject(){
//   setIsCreatingProject(true);
// }

// const content =
//   projectsState.selectedProjectId === null
//     ? <NewProject />
//     : projectsState.selectedProjectId === undefined
//     ? <NoProjectSelected onStartAddProject={handleStartAddProject} />
//     : null; // instead of using let
