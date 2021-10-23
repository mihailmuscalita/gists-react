import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Header({onSearchClick, onChangeText}) {
    return (
        <header>
            {/*Top header search */}
            <div className="bg-gray-200 flex items-center p-1 justify-center flex-grow mt-2">
                <p className="m-2 w-70 font-serif text-gray-800 text-2xl italic ">Username required</p>
                <input className="h-12 p-1 rounded-full text-center"  
                       placeholder="Enter an username" 
                       onChange={onChangeText}/>
                <FaSearch onClick={onSearchClick} className="cursor-pointer h-10 m-3 w-15"/>
            </div>
        </header>
    );
}

export default Header;