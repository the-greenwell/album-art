import React from 'react'
import { ArtistPage } from './components/ArtistPage'
import 'bootstrap/dist/css/bootstrap.css';
import { useAppContext } from './context/AppContext';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {SearchPage} from './components/SearchPage';

const App: React.FC = () => {

  const { dark } = useAppContext();


  return (
    <div className={`App ${dark ? 'text-light bg-dark' : 'text-dark bg-white'}`}>
      <Navbar />
      <Routes>
        <Route path="/album-art/" element={<SearchPage />} />
        <Route path="/album-art/artist" element={<ArtistPage />} />
      </Routes>
    </div>
  )
}

export default App
