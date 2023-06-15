import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AdvertPage from './routes/Advert.js';
import UserPage from './routes/UserProfile.js';
import NavBar from './components/Navbar';

export default function App()
{
    return <>
        <NavBar />
        <Routes>
          <Route path="/" element={<AdvertPage />} />
          <Route path="/userProfile" element={<UserPage />} />
          <Route path="/advertPage" element={<AdvertPage />} />
        </Routes>
    </>;
}