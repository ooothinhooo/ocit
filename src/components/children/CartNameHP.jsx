import React from 'react';

function CartNameHP({ link, id, name }) {
    return (
        <>
            <a href={link} target="_blank">
                <div
                    class="p-3  rounded-xl text-sm w-fit bg-gray-700 text-gray-300 hover:bg-blue-200 hover:text-blue-800 cursor-pointer"
                    role="alert"
                >
                    <span class="font-bold">{id}</span> {name}
                </div>
            </a>
        </>
    );
}

export default CartNameHP;
