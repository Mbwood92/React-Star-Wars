import React, { useState, useEffect } from 'react';
import { GetAllStarShips } from './components/GetAllStarShips';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const starshipsData = await GetAllStarShips();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='app-container'>
    <h1 className='nav'>Star Wars Starships</h1>

    <div className='card-container'>
      {starships.map((starship) => (
      <div className = 'card' key={starship.name}>{starship.name}
      </div>
      ))}
    
    </div>
  </div>
);
};
export default App;