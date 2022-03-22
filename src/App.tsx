import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamplePage from './pages/ExamplePage'
import HomePage from './pages/HomePage'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;