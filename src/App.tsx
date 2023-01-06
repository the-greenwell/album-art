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
        <Route path="/" element={<SearchPage />} />
        <Route path="/artist" element={<ArtistPage />} />
      </Routes>
    </div>
  )
}

export default App
