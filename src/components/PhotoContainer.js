import React, { useEffect } from 'react';
import Photo from './Photo';
import NoMatches from './NoMatches';
import { useParams } from 'react-router-dom'



const PhotoContainer = (props) => {
    //getting the data from the api call via props
    const resultsPictures = props.dataPictures;
    const resultsCats = props.dataCats;
    const resultsDogs = props.dataDogs;
    const resultsComputers = props.dataComputers;

    const { searchInput } = useParams();


    //updating searchInput state if the parameter changes and triggering useEffect to refetch the data 
    useEffect(() => {
        if(props.handleAddSearchInput && searchInput !== props.searchInput) {
            props.handleAddSearchInput(searchInput);
        }
    },[searchInput] )
    

    //displaying the photos with props in a grid and showing a NoMatches page if the data is equal to 0
    return (
        <div className="photo-container">
        <h2>{props.searchInput? `Results for ${props.searchInput}` : ' ' }</h2>
        <ul> 
            {resultsPictures&&resultsPictures.length>0?resultsPictures.map(picture =>
                <Photo 
                    url={`https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
                    key={picture.id}
                /> 
            )
            :resultsPictures&&resultsPictures.length===0?
                <NoMatches />
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