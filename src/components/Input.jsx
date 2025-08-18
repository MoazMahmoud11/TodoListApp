import { forwardRef } from "react";

const Input = forwardRef( function ({ label, isTextarea, ...props}, ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-700 focus:outline-none focus:border-stone-600  sm:p-3";
    return (
        <p className="flex flex-col gap-1 my-4 sm:my-4">
            <label className="text-sm font-bold uppercase text-stone-600  sm:text-sm">{label}</label>
            {isTextarea ? (<textarea className={`${classes} sm:text-base`} {...props} ref={ref} />) 
            : (<input className={`${classes} font-bold sm:text-sm`} {...props} ref={ref} />) }
        </p>
    )
})
export default Input;