import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const Cats = (props) => {
    const results = props.data;

    return (
        <div className="photo-container">
        <h2>{props.cats? `Results for ${props.cats}` : ' ' }</h2>
        <ul> 
            {results?.map(picture =>
                 <Photo 
                    url={`https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
                    key={picture.id}
                /> 

                //: <NotFound />
                
            )}

            {/* if statement: if there are no results <NotFound /> */}
        </ul>
        </div>
    )
}


export default Cats;