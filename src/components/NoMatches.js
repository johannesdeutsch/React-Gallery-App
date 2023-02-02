import React from 'react';

//no matches component displaying a friendly message
const NoMatches = () => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>Unfortunately your search did not return any results. Please try again.</p>
        </li>
    );
}

export default NoMatches;