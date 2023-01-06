import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { Artist } from '../types/Artist';
import { useNavigate } from 'react-router-dom';

export const SearchResults = () => {
    const { searchResults, changeArtist, dark, artist } = useAppContext();
    const navigate = useNavigate();

    const artistHandler = (newArtist:Artist) => {
        if(changeArtist) changeArtist(newArtist);
        navigate('/artist')
    }

    return (
        <div className='mx-auto pb-5 results-container mt-3'>
            <div className='d-flex gap-4 flex-wrap justify-content-center'>
                {searchResults.map(res => 
                    <div className={`border searchResult card ${dark && 'bg-dark'}`} onClick={()=> artistHandler(res)} key={res.name} style={{width: '18rem'}}>
                        <img className="card-img-top"  src={res.img} alt={res.name} />
                        <div className="card-body text-center">
                            <p className='artist-name card-text'>{res.name}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}