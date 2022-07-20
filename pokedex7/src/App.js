import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import DetailsPage from './pages/DetailsPage';
import Header from './components/Header';
import {ContextoPokemon} from './context'
import GlobalStyle from './globalStyles'

function App() {
  const pokemon = 'pikachu'
  return (
    <div>
      <GlobalStyle />
      <Header></Header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/pokedex' element={<PokedexPage />}></Route>
            <Route path='/details' element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
