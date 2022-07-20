import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import PokedexPage from '../pages/PokedexPage';
import DetailsPage from '../pages/DetailsPage';
import Header from '../components/Header';

const Router = () => {
    return (
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/pokedex' element={<PokedexPage />}></Route>
            <Route path='/details' element={<DetailsPage />}></Route>
          </Routes>
        </BrowserRouter>
    )
}

export default Router;