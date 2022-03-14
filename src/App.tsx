import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="page">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
