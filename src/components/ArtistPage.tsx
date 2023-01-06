import React from 'react'
import { FaSpotify } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'
import httpCommon, { genToken, formatAlbumData } from '../http-common';
import { AlbumRow } from './AlbumRow'

export const ArtistPage: React.FC = () => {

    const { artist, changeAlbums } = useAppContext();
    const navigate = useNavigate();

    React.useEffect(() => {
        if(artist){
            genToken().then(token =>{
                httpCommon.get(`artists/${artist.id}/albums?limit=50&include_groups=album&market=US&locale=en-US`, 
                {
                headers: {
                    'Authorization': 'Bearer ' + token, 
                    'Content-Type' : 'application/json'
                }
                }).then(res => {
                    const response = formatAlbumData(res).reverse();
                    if(changeAlbums) changeAlbums(response);
                }).catch(err =>{
                    console.log(err)    
                })
            })
        } else {
            navigate('/album-art')
        }
    }, [])

    return (
        <div className='artist-page'>
            { artist &&
                <>
                    <h1 className="mb-4">The Albums of - <span className='artist-name'>{artist.name}</span></h1>
                    <AlbumRow/>
                    <div className='artist-link text-center mt-5'>
                        { artist.url && <a className="artist-link" href={artist.url} target="_blank">View {artist.name} on Spotify <FaSpotify /></a>}
                    </div>
                </>
            }
        </div>
    )
}
