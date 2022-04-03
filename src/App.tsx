import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamplePage from './pages/ExamplePage'
import HomePage from './pages/HomePage'
import './App.css';
import PageLayout from './PageLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout page={<HomePage/>}/>}/>
        <Route path='/example' element={<PageLayout page={<ExamplePage/>}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;