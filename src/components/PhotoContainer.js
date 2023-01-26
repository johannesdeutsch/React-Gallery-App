import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = (props) => {
    const resultsPictures = props.dataPictures;
    const resultsCats = props.dataCats;
    const resultsDogs = props.dataDogs;
    const resultsComputers = props.dataComputers;




    return (
        <div className="photo-container">
        <h2>{props.searchInput? `Results for ${props.searchInput}` : ' ' }</h2>
        <ul> 
            {resultsPictures?resultsPictures.map(picture =>
                <Photo 
                    url={`https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
                    key={picture.id}
                /> 
            )
            :resultsCats?resultsCats.map(cat =>
                 <Photo 
                    url={`https://live.staticflickr.com/${cat.server}/${cat.id}_${cat.secret}.jpg`}
                    key={cat.id}
                />    
            )
            :resultsDogs?resultsDogs.map(dog =>
                 <Photo 
                    url={`https://live.staticflickr.com/${dog.server}/${dog.id}_${dog.secret}.jpg`}
                    key={dog.id}
                /> 
            )
            :resultsComputers.map(computer =>
                 <Photo 
                    url={`https://live.staticflickr.com/${computer.server}/${computer.id}_${computer.secret}.jpg`}
                    key={computer.id}
                />   
            )
            }
        </ul>
        </div>
    )
}
    
export default PhotoContainer;