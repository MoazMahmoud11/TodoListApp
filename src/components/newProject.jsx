import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd,onCancel}) {
const modal = useRef();

const title = useRef();
const description = useRef();
const dueDate = useRef();

function handleSave(e){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation... 
    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
        modal.current.open();
        return;
    }
    // /Validation
    onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
        
    });

    // if(enteredTitle === ""){
        
    // }
}

    return (
        <>
            <Modal buttonCaption={"Okay"} ref={modal} >
                <h2 className="text-xl font-bold text-stone-700 my-4 sm:text-xl ">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Opus ... looks like you forgot to enter a value.</p>
                <p className="mb-4 text-stone-600">make sure you provide a valid value for every input field.</p>
                
            </Modal>
            <div className="w-[35rem] mt-16 sm:w-[28rem] md:w-[35rem] md:mt-16">
                <menu className="flex items-center justify-end gap-4 my-4  sm:gap-4 sm:my-4 ">
                    <li >
                        <button className="text-stone-800 hover:text-stone-950"
                        onClick={onCancel}
                        >Cancel</button>
                    </li>
                    <li>
                        <button 
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950  sm:px-6"
                        onClick={handleSave}
                        >Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" label="Title" ref={title} />
                    <Input label="Description" isTextarea={true} ref={description}/>
                    <Input type="date" label="Due Date" ref={dueDate}  />
                </div>
            
            </div>
        </>
    );
}

{/* <section className="flex-1 container mx-11 my-24">
    <div className="flex flex-row justify-between xl:bg-fuchsia-400">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">Learning React</h1>
        <button className="text-slate-950 font-bold text-lg p-1 rounded-lg hover:bg-zinc-800 hover:text-stone-100 duration-300 tracking-tight ">Delete</button>
    </div>
    <p></p>
    <p></p>
    <p></p>
    <hr />
</section> */}