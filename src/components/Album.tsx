import React, { useState } from 'react'
import { FaSpotify } from 'react-icons/fa';
import { Album } from '../types/Artist';

interface Props {
    album: Album;
}

export const AlbumComponent: React.FC<Props> = ({ album }) => {
    const [mouseOver, setMouseOver] = useState<boolean>(false);

    return (
        <div className="position-relative"
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}>
            <img src={album.image} alt={album.title} className={`shadow bg-white album ${mouseOver && "blurred-img"}`} draggable="false"/>
            {
                mouseOver && 
                <div className="album-text hover-text">
                    <p className='larger'>{album.title}</p>
                    <p className="smaller">Released:</p>
                    <p>{album.releaseDate}</p>
                    <a href={album.url} target='_blank'>Listen on Spotify <FaSpotify /></a>
                </div>
            }
        </div>
    ) 
}
