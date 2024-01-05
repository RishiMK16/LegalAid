import React, { useState, useEffect } from "react";

const LawyerSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedLawyers, setDisplayedLawyers] = useState([]);

  // Initialize displayedLawyers with the entire list of lawyers when the component is first rendered
  useEffect(() => {
    setDisplayedLawyers(product);
  }, []);

  const handleSearch = (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = product.filter(
      (item) =>
        item.name.toLowerCase().includes(searchData) ||
        item.specification.toLowerCase().includes(searchData)
    );
    setDisplayedLawyers(filteredData);
  };

  const product = [
    {
      id: 0,
      name: 'Rishi',
      specification: 'Criminal Law',
      location: 'Hyderabad',
  },
  {
      id: 1,
      name: 'Eshaan',
      specification: 'Labour Law',
      location: 'Secundarabad',
  },
  {
      id: 2,
      name: 'Keshav',
      specification: 'Cyber Law',
      location: 'Warangal',
  },
  {
      id: 3,
      name: 'Srishma',
      specification: 'Family & Maritial affairs',
      location: 'Mumbai',
  },
  {
      id: 4,
      name: 'Sarayu',
      specification: 'Criminal Law',
      location: 'Chennai',
  },
  {
      id: 5,
      name: 'Sindhu',
      specification: 'Criminal Law',
      location: 'Bangalore',
  }
  ];

  return (
    <div className="container lawyer-search">
      <div className="data">
        <div className="header">
          <p>Search for Lawyers</p>
        </div>
        <div className="searchBar">
          <input
            placeholder="Search..."
            id="searchBar"
            name="searchBar"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e);
            }}
          />
          <i className="fa-solid fa-magnifying-glass glass" id="btn"></i>
        </div>
        <div className="body">
          <div id="root">
            <div className="grid-container">
              {displayedLawyers.slice(0, 4).map((lawyer) => (
                <div className="boxx" key={lawyer.id}>
                  <div className="box">
                    {/* <div className="img-box">
                      {/* <img
                        className="images"
                        // src={lawyer.image}
                        alt={`Lawyer: ${lawyer.name}`}
                      /> */}
                   {/* </div> */}
                    <div className="bottom">
                      <p>{lawyer.name}</p>
                      <h2>{lawyer.specification}</h2>
                      <h2>{lawyer.location}</h2>
                      <button>Book Appointment</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerSearch;