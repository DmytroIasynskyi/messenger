import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            Page not found. Navigate to <Link to="/all-projects">All Projects</Link> page.
        </div>
    );
};

export default NotFoundPage;