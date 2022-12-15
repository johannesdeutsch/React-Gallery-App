import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = (props) => {
    // const [data, setPhoto] = React.useState(data);
    // const { searchInput } = props;
    // takes the info about the photos from the api to display them while the searchForm is pulling them upwards to the App component to get the searchterm info

    const results = props.data;
    //let pictures = results.map(photo => <Photo /*url={}*//>)

    console.log('props.pictures', props.pictures);

    return (
        <div className="photo-container">
        <h2>Results for {props.searchInput}</h2>
        <ul> 
            {/* data.map? */}
            {results.pictures?.map(picture =>
                 <Photo 
                    // props
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
    
export default PhotoContainer;