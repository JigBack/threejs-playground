import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamplePage from './pages/ExamplePage'
import HomePage from './pages/HomePage'
import './App.css';
import PageLayout from './components/PageLayout';
import VoxelTerrainPage from './pages/VoxelTerrainPage';

export interface RouteConfig {
  path: string
  name: string
  component: JSX.Element
}

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: <HomePage />
  },
  {
    path: "/example",
    name: "Example",
    component: <ExamplePage />
  },
  {
    path: "/voxel-terrain",
    name: "Voxel Terrain",
    component: <VoxelTerrainPage />
  }
]

const RouteList = <Routes>
  {routes.map(route => {
    const { path, component } = route
    return <Route path={path} element={component} />
  })}
</Routes>

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout page={RouteList} />
    </BrowserRouter>
  );
}

export default App;