import React from 'react'
import styled from 'styled-components'
import Title from '../img/header.png'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage, goToHomePage, goToPokedexPage } from '../routes/coordinator'

const Main = styled.div`
display: grid;
grid-template-columns: 300px 300px 280px;
width: 100%;
height: 10vh;
align-items: center;
justify-content: center;
background-color: white;
gap: 450px;
`

const ImageHeader = styled.img`
width: 70%;
:hover { 
  cursor: pointer;
}
`

const PokedexButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
top: 41px;
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
`

export default function Header() {
  const navigate = useNavigate()
  return (
    <Main>
      <div></div>
      <ImageHeader src={Title} onClick={() => goToHomePage(navigate)}/>
      <PokedexButton onClick={() => goToPokedexPage(navigate)}>Pokedéx</PokedexButton>
    </Main>
  )
}
