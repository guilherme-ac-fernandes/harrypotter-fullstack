import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HPContext from './HPContext';

function HPProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const { data } = await axios.get('http://localhost:3001/character');
      setCharacters(data);
    };
    fetch();
    setLoading(false);
  }, []);

  const fetchCharacters = async () => {
    const { data } = await axios.get('http://localhost:3001/character');
    setCharacters(data);
  };

  const contextValue = {
    loading,
    characters,
    setCharacters,
    fetchCharacters,
  };

  return (
    <HPContext.Provider value={ contextValue }>
      {children}
    </HPContext.Provider>
  );
}

export default HPProvider;