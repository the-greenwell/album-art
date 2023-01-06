import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { FaSpotify } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const [path, setPath] = useState<string>('');
    const { dark, toggleDark, artist, setResults } = useAppContext();

    useEffect(()=>{
        setPath(location.pathname.split('/')[1]);
    },[location])

    const resetSite =()=>{
        if(setResults) setResults([])
    }

    return (
        <nav id="navbar" className={`navbar ${dark ? 'navbar-dark bg-black' : 'navbar-light bg-light'}`}>
            <div className='left'>
                <span className="navbar-brand mb-0 h1" onClick={resetSite} style={{cursor: 'pointer'}}>Album Art</span>
                <Link to={path == 'artist' ? '/' : '/artist'}>{path !== '' ? 'Search for an Artist' : artist && 'View Last Artist'}</Link>
            </div>
            <div className='d-flex align-items-center gap-2 right'>
                <p className={`${dark ? 'text-light' : 'text-dark'} spotify-link`}>Powered by the <a className="footer-link" href="https://www.spotify.com">Spotify <FaSpotify /></a> API</p>
                <button className={`btn ${dark ? 'btn-light' : 'btn-dark'} btn-sm`} onClick={toggleDark}>
                    {dark ? 'Light' : 'Dark'}
                </button>
            </div>
        </nav>
    )
}
