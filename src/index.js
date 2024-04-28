import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AntiqueCollections from './Products/AntiqueCollections';
import CopperProduct from './Products/CopperProduct';
import BrowseAllCollection from './Products/BrowseAllCollection';
import ColoredCollection from './Products/ColoredCollection';
import Navbar from './Navbar';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<CopperProduct/>}/>
      <Route path='/antique-bottle-collection' element={<AntiqueCollections/>}/>
      <Route path='/all-bottle-collection' element={<BrowseAllCollection/>}/>
      <Route path='/colored-bottle-collection' element={<ColoredCollection/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
