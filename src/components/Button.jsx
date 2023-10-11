import React from 'react';

export default function Button({ children, onClick, otherClasses, ...props }) {
    return (
        <button
            className={"bg-black rounded px-4 py-1 hover:bg-neutral-500  hover:text-neutral-800 " + (otherClasses ? "" + otherClasses : "text-white")}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
