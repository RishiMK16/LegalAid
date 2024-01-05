import React, { useState } from 'react';
import AppNavbar from './components/Navbar';
import LawyerSearch from './components/LawyerSearch';
import MapComponent from './components/MapComponent';
import SearchBar from './components/SearchBar'; 
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    setSearchQuery(query);
  };

  return (
    <div>
      <AppNavbar />
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* <div className="container map"> */}
      <div style={{"display":"flex","msFlexDirection":"row"}}>
      <MapComponent />
        <LawyerSearch searchQuery={searchQuery} className="lawyer-search" />
      </div>
        
      {/* </div> */}
    </div>
  );
};

export default App;
export { AppNavbar as Navbar };
