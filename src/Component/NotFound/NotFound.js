import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center flex-col" style={{ height: "500px" }}>
            <h2 className="text-gray-400 text-4xl">404 Page Not Found</h2>
            <Link className="mt-5 hover:underline" to="/home">Back to home</Link>
        </div>
    );
};

export default NotFound;