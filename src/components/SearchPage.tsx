import React from 'react'
import { useAppContext } from '../context/AppContext'
import { LandingPage } from './LandingPage';
import {SearchBar} from './SearchBar'
import { SearchResults } from './SearchResults';

export const SearchPage: React.FC = () => {
    const { searchResults } = useAppContext();
    return (
        <div className="mt-5">
            <SearchBar />
            {searchResults.length ? 
                <SearchResults />
                :<LandingPage />
            }
        </div>
    )
}