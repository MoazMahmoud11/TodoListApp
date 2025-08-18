export default function Button({children, ...props}) {
    return (
    <button className="w-fit mb-4  bg-zinc-700 text-zinc-400 py-3 px-4 object-cover rounded-md hover:bg-zinc-800 duration-150 font-bold text-lg hover:text-stone-300" 
    {...props}
    >
        {children}
    </button>
    );
}