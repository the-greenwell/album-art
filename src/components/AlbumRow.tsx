import React from 'react'
import { useAppContext } from '../context/AppContext'
import { AlbumComponent } from './Album'
import "../App.css";

export const AlbumRow: React.FC = () => {
    const { albums } = useAppContext();

    return (
        <div className="album-row">
            {!albums.length && <p className='mx-auto mt-5 unavailable'>No albums available, search for a different artist!</p>}
            { albums.map(album => 
                <AlbumComponent album={album} key={album.id}/>
            )}
        </div>
        
    )
}
