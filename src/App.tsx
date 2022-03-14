import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import Landing from './components/Landing/Landing';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
