import React, { useState } from 'react';
import AppNavbar from './components/Navbar';
import LawyerSearch from './components/LawyerSearch';
import MapComponent from './components/MapComponent';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <AppNavbar />
      <div style={{ "display": "flex", "msFlexDirection": "row" }}>
        <MapComponent />
        <LawyerSearch searchQuery={searchQuery} onSearch={setSearchQuery} />
      </div>
    </div>
  );
};

export default App;
export { AppNavbar as Navbar };
