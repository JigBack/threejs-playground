import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamplePage from './pages/ExamplePage'
import HomePage from './pages/HomePage'
import './App.css';
import { Button, Grommet, Header, Menu } from 'grommet';
import { Home } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const App = () => {
  return (
    <Grommet theme={theme}>
      <Header background="brand">
        <Button icon={<Home />} hoverIndicator />
        <Menu label="account" items={[{ label: 'logout' }]} />
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example" element={<ExamplePage />} />
        </Routes>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;