import axios from 'axios';
import React, { useEffect } from 'react';
import { Artist, Album } from '../types/Artist';

interface AppContextType {
    dark: boolean;
    toggleDark?: () => void;
    searchResults: Artist[];
    setResults?: (searchResults:Artist[]) => void;
    artist?: Artist;
    changeArtist?: (newArtist:Artist) => void;
    albums: Album[];
    changeAlbums?: (albums:Album[]) => void;
}

interface Props {
    children: React.ReactNode;
}

const defaultState = {
    dark: false,
    albums: [],
    searchResults: []
}

const AppContext = React.createContext<AppContextType>(defaultState);

export const AppProvider: React.FC<Props> = ({ children }) => {
    const [artist, setArtist] = React.useState<Artist>();
    const [searchResults, setResults] = React.useState<Artist[]>(defaultState.searchResults)
    const [albums, setAlbums] = React.useState<Album[]>(defaultState.albums);
    const [dark, setDark] = React.useState<boolean>(defaultState.dark);

    const toggleDark = () => {
        setDark(!dark);
    }
    const changeArtist = (newArtist:Artist) => {
        setArtist(newArtist);
    }
    const changeAlbums = (albums:Album[]) => {
        setAlbums(albums);
    }

    useEffect(()=>{
        const color = dark ? '#212529' : 'white';
        document.body.style.setProperty('background-color', color);
    },[dark])

    return <AppContext.Provider value={{dark, toggleDark, artist, changeArtist, albums, changeAlbums, searchResults, setResults}}>{children}</AppContext.Provider>
}

export const useAppContext = () => React.useContext(AppContext);