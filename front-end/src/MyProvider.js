import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [value, setValue] = useState('Initial value');
  const [dataFetch, setDataFetch] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products/');
      const data = await response.json();
      return setDataFetch(data);
    };
    fetchProducts();
    console.log(dataFetch);
  }, []);

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  const contextValue = useMemo(() => (
    { value, changeValue, dataFetch }), [value, dataFetch]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
