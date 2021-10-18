import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between bg-blue-500 p-5">
            <div className="text-xl font-semibold text-white">
                <Link className="ml-3 hover:underline" to="/home">Home</Link>
                <Link className="ml-3 hover:underline" to="/services">Services</Link>
                <Link className="ml-3 hover:underline" to="/classes">Classes</Link>
                <Link className="ml-3 hover:underline" to="/about-us">About us</Link>
            </div>
            <div className="w-2/6">
                <i className="fas fa-search absolute py-1 px-2 text-xl text-gray-600"></i>
                <input className="w-4/5 pl-10 py-1 rounded focus:outline-none" type="text" placeholder="What are you looking for?" />
                <button className="text-white bg-blue-900 p-1 rounded px-2 font-semibold ml-3">log in</button>
            </div>
        </div>
    );
};

export default Header;