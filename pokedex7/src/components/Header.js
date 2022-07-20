import React, { useContext } from 'react'
import styled from 'styled-components'
import { ContextoPokemon } from '../context'
import Title from '../img/header.png'

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
`

export default function Header() {
  return (
    <Main>
      <div></div>
      <ImageHeader src={Title} />
      <PokedexButton>Pokedéx</PokedexButton>
    </Main>
  )
}
