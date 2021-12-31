import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <h5>This page is not found, 404!</h5>
            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;