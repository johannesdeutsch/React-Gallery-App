import React, { useState } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = (props) => {
    const [photo, setPhotos] = React.useState('');
    
// takes the info about the photos from the api to display them while the searchForm is pulling them upwards to the App component to get the searchterm info

    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {props.photos.map(photo =>
                <Photo 
                    // props
                    {...photo}
                    key={photo.id}
                />
            )}
          
            
            {/* if statement: if there are no results <NotFound /> */}
        </ul>
        </div>
    )
}
    
export default PhotoContainer;