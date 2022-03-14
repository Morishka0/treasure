import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import Landing from './components/Landing/Landing';
import Layout from './components/Layout/Layout';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout hasBackground={true} />}>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
