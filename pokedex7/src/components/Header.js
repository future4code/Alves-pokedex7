import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../img/header.png'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage, goToHomePage, goToPokedexPage } from '../routes/coordinator'
import { Link } from 'react-router-dom'

const Main = styled.div`
display: grid;
grid-template-columns: 300px 300px 280px;
width: 100%;
height: 10vh;
align-items: center;
justify-content: center;
background-color: white;
gap: 450px;
@media (min-width: 365px) and (max-width: 763px){ 
    grid-template-columns: 0px 33% 33%;
    gap: 0%;
}
`

const ImageHeader = styled.img`
width: 70%;
:hover { 
  cursor: pointer;
}
justify-self: center;
@media (min-width: 365px) and (max-width: 763px){ 
  width: 90%;
}
`

const PokedexButton = styled.div`
width: 250px;
height: 60px;
justify-self: center;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
background: #33A4F5;
border-radius: 8px;
border: 0;
font-family: Poppins;
font-weight: 700;
font-size: 24px;
color: white;
opacity: 0.9;
:hover { 
  cursor: pointer;
  background: #33A4F5;
  opacity: 1;
}
@media (min-width: 365px) and (max-width: 763px){ 
  padding: 2px;
  font-size: 16px;
  width: 70%;
  height: 40px;
}
`

export default function Header() {
  const [onHome, setOnHome] = useState(true)
  const navigate = useNavigate()
  const goToPokedex = () => {
    setOnHome(false)
    goToPokedexPage(navigate)
  }

  const returnHome = () => {
    setOnHome(true)
    goToHomePage(navigate)
  }
  return (
    <Main>
      <div></div>
      <ImageHeader src={Title} onClick={() => goToHomePage(navigate)}/>
      {onHome ? 
        <PokedexButton onClick={goToPokedex}>Pokedéx</PokedexButton> :
        <PokedexButton onClick={returnHome}>Home</PokedexButton>
      }
    </Main>
  )
}
