import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = (props) => {
   // const [data, setPhoto] = React.useState(data);
    //const { searchInput } = props;
// takes the info about the photos from the api to display them while the searchForm is pulling them upwards to the App component to get the searchterm info

    const results = props.data;

    console.log('props.photos', props.photos);

    return (
        <div className="photo-container">
        <h2>Results for {props.searchInput}</h2>
        <ul> 
            {/* data.map? */}
            {results.photos?.map(photo =>
                <Photo 
                    // props
                    key={photo.id}
                /> 

                //: <NotFound />
            )}

            {/* if statement: if there are no results <NotFound /> */}
        </ul>
        </div>
    )
}
    
export default PhotoContainer;