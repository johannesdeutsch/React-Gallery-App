import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = () => {
    // const ... = React.useState('');
    
    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            <Photo />
            
            {/* if statement: if there are no results <NotFound /> */}
        </ul>
        </div>
    )
}
    
export default PhotoContainer;