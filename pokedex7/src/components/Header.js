import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Title from '../img/header.png'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage, goToHomePage, goToPokedexPage } from '../routes/coordinator'
import { Link } from 'react-router-dom'
import { GlobalContext } from './global/GlobalContext'
import BackArrow from '../img/Vector.png'
import CapturedAlert from './CapturedAlert'
import DeleteAlert from './DeleteAlert'

const Main = styled.div`
font-family: 'Poppins';
display: grid;
grid-template-columns: 300px 300px 280px;
width: 100%;
height: 10vh;
align-items: center;
justify-content: center;
background-color: white;
gap: 400px;
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

const AddPokedexButton = styled.div`
width: 250px;
height: 60px;
justify-self: center;
justify-content: center;
align-items: center;
display:flex;
padding: 4px 10px;
background: #33A4F5;
border-radius: 8px;
border: 0;
font-family: Poppins;
font-size: 16px;
color: white;
opacity: 0.9;
:hover { 
  cursor: pointer;
  opacity: 1;
}
@media (min-width: 365px) and (max-width: 763px){ 
  padding: 2px;
  font-size: 16px;
  width: 70%;
  height: 40px;
}
`

const RemovePokedexButton = styled.div`
width: 250px;
height: 60px;
justify-self: center;
display: flex;
justify-content: center;
align-items: center;
padding: 4px 10px;
background: #FF6262;
border-radius: 8px;
border: 0;
font-family: Poppins;
font-size: 16px;
color: white;
opacity: 0.9;
:hover { 
  cursor: pointer;
  opacity: 1;
}
@media (min-width: 365px) and (max-width: 763px){ 
  padding: 2px;
  font-size: 16px;
  width: 70%;
  height: 40px;
}
`

const BackHome = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-decoration-line: underline;
margin-left: 10px;
border: 0;
background-color: white;
:hover { 
  cursor: pointer;
}
`
const TopDiv = styled.div`
display: flex;
align-items: center;`

export default function Header() {
  const { onHome, setOnHome, onPokedex, setOnPokedex, onDetails, setOnDetails, onCapture, details, onDelete, pokedex, success, deleteSuccess } = useContext(GlobalContext)

  const navigate = useNavigate()
  const goToPokedex = () => {
    setOnHome(false)
    setOnPokedex(true)
    setOnDetails(false)
    goToPokedexPage(navigate)
  }

  const goToHome = () => {
    setOnPokedex(false)
    setOnHome(true)
    setOnDetails(false)
    goToHomePage(navigate)
  }

  console.log(details, pokedex)
  const idsPokedex = pokedex.map((item) => item.id)
  console.log(idsPokedex)

  const goBack = () => {
    if (idsPokedex.includes(details.id) === true && onDetails) {
      goToPokedex()
    } else {
      goToHome()
    }
  }

  return (
    <Main>
      <TopDiv>
        {(onPokedex || onDetails) && <img src={BackArrow} />}
        {(onPokedex || onDetails) && <BackHome onClick={goBack}>Todos Pokémons</BackHome>}
      </TopDiv>
      <ImageHeader src={Title} onClick={goToHome} />
      {onHome && <AddPokedexButton onClick={goToPokedex}>Pokedex</AddPokedexButton>}
      {(onDetails && !idsPokedex.includes(details.id)) && <AddPokedexButton onClick={() => onCapture(details.id, details.name, details.sprites, details.stats, details.moves, details.types, true)}>Adicionar Pokemon</AddPokedexButton>}
      {(onDetails && idsPokedex.includes(details.id)) && <RemovePokedexButton onClick={() => onDelete(details.id, details.name, details.sprites, details.stats, details.moves, details.types, false)}>Excluir da Pokedex</RemovePokedexButton>}
      {success && <CapturedAlert isOpen={success}></CapturedAlert>}
      {deleteSuccess && <DeleteAlert isOpen={deleteSuccess}></DeleteAlert>}
    </Main>
  )
}
