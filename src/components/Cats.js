import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import NotFound from './NotFound';




const Cats = (props) => {
    const results = props.data;

    console.log('props.data', props.data);

    return (
        <div className="photo-container">
        <h2>{props.searchInput? `Results for ${props.searchInput}` : ' ' }</h2>
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

Cats.propTypes = {
    data: PropTypes.string
}

export default Cats;