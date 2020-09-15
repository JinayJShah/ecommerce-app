import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import { AppContext } from './AppContext';
import data from './Assets/productlist.json';

const ProviderComponent = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const context = {
    productlist: data,
    selectedProducts,
    setSelectedProducts,
  };

  return (
    <AppContext.Provider value={context}>
      <Router>{routes}</Router>
    </AppContext.Provider>
  );
};

export default ProviderComponent;
