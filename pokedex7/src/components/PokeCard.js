import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import TypeGrass from '../img/grass.png'
import TypeBug from '../img/bug.png'
import TypeWater from '../img/water.png'
import TypeFire from '../img/fire.png'
import TypeNormal from '../img/normal.png'
import TypeFlying from '../img/flying.png'
import TypePoison from '../img/poison.png'
import TypeSteel from '../img/steel.png'
import TypeRock from '../img/rock.png'
import TypePsychic from '../img/psychic.png'
import TypeIce from '../img/ice.png'
import TypeGround from '../img/ground.png'
import TypeGhost from '../img/ghost.png'
import TypeFighting from '../img/fighting.png'
import TypeDark from '../img/dark.png'
import TypeDragon from '../img/dragon.png'
import TypeFairy from '../img/fairy.png'
import TypeElectric from '../img/electric.png'
import { GlobalContext } from './global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../routes/coordinator'
import { BASE_URL } from '../constants/urls'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Main = styled.div`
display: flex;
width: 440px;
height: 263px;
flex-direction: column;
justify-content: flex-end;
color: white;
@media (min-width: 365px) and (max-width: 763px){ 
  width: 100%;
  height: 240px;
}
`

const Container = styled.div`
display: flex;
width: 440px;
height: 210px;
flex-direction: column;
border-radius: 12px;
${({ color }) => {
    switch (color) {
      case 'grass':
        return css`
        background-color: #729F92;`
      case 'water':
        return css`
        background-color: #71C3FF;`
      case 'fire':
        return css`
        background-color: #EAAB7D;`
      case 'bug':
        return css`
        background-color: #76A866;`
      case 'normal':
        return css`
        background-color: #BF9762;`
      case 'poison':
        return css`
        background-color: #AF97BA;`
      case 'flying':
        return css`
        background-color: #95D1FC;`
      case 'dark':
        return css`
        background-color: #958DA5;`
      case 'ghost':
        return css`
        background-color: #A3B7F0;`
      case 'steel':
        return css`
        background-color: #97C5D6;`
      case 'electric':
        return css`
        background-color: #F1E4A8;`
      case 'fighting':
        return css`
        background-color: #C78094;`
      case 'fairy':
        return css`
        background-color: #EBABE6;`
      case 'psychic':
        return css`
        background-color: #E2B1B2;`
      case 'ice':
        return css`
        background-color: #B9E7E0;`
      case 'dragon':
        return css`
        background-color: #489AE1;`
      case 'rock':
        return css`
        background-color: #E2DAC3;`
      case 'ground':
        return css`
        background-color: #F1BA9E;`
    }
  }}    
  @media (min-width: 365px) and (max-width: 763px){ 
  width: 100%;
  height: 263px;
}
  
`

const TopContainer = styled.div`
display: flex;
width: 100%;
height: 80%;
justify-content: space-between;
align-items:center;
@media (min-width: 365px) and (max-width: 763px){ 
  justify-content: center;
}
`

const TopDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height: 100%;
@media (min-width: 365px) and (max-width: 763px){ 
  height: 60%;
}

`
const BottomDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 135px;
`
const Image = styled.img`
width: 175px;
height: 175px;
margin-bottom: 105px;
@media (min-width: 365px) and (max-width: 763px){ 
  margin-bottom: 0;
  width: 100px;
  height: 100px;
}
`

const Image2 = styled.img`
width: 210.73px;
height: 210.73px;
position: absolute;
margin-left:232px;
margin-top:2px;
`
const ButtonCapturar = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FFFFFF;
border-radius: 8px;
border: 0px;
position: absolute;
margin-left: 275px;
font-size: 1rem;
font-family: 'Poppins';
opacity: 0.9;
color:black;
:hover { 
  cursor: pointer;
  opacity: 1;
}
@media (min-width: 365px) and (max-width: 763px){ 
  margin-left: 150px;
}
`

const ButtonExcluir = styled.button`
color: white;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FF6262;
border-radius: 8px;
border: 0px;
position: absolute;
margin-left: 275px;
font-size: 1rem;
font-family: 'Poppins';
opacity: 0.8;
:hover { 
  cursor: pointer;
  opacity: 1;
}
@media (min-width: 365px) and (max-width: 763px){ 
  margin-left: 200px;
}
`

const ButtonDetalhes = styled(Link)`
width: 100px;
height: 24px;
font-weight: 700;
line-height: 24px;
font-size: 1.2rem;
text-decoration-line: underline;
background-color: #729F92;
border: 0px;
margin-left: 20px;
color: white;
font-family: 'Poppins';
opacity: 0.9;
:hover { 
  cursor: pointer;
  opacity: 1;
}
${({ color }) => {
    switch (color) {
      case 'grass':
        return css`
        background-color: #729F92;`
      case 'water':
        return css`
        background-color: #71C3FF;`
      case 'fire':
        return css`
        background-color: #EAAB7D;`
      case 'bug':
        return css`
        background-color: #76A866;`
      case 'normal':
        return css`
        background-color: #BF9762;`
      case 'poison':
        return css`
        background-color: #AF97BA;`
      case 'flying':
        return css`
        background-color: #95D1FC;`
      case 'dark':
        return css`
        background-color: #958DA5;`
      case 'ghost':
        return css`
        background-color: #A3B7F0;`
      case 'steel':
        return css`
        background-color: #97C5D6;`
      case 'electric':
        return css`
        background-color: #F1E4A8;`
      case 'fighting':
        return css`
        background-color: #C78094;`
      case 'fairy':
        return css`
        background-color: #EBABE6;`
      case 'psychic':
        return css`
        background-color: #E2B1B2;`
      case 'ice':
        return css`
        background-color: #B9E7E0;`
      case 'dragon':
        return css`
        background-color: #489AE1;`
      case 'rock':
        return css`
        background-color: #E2DAC3;`
      case 'ground':
        return css`
        background-color: #F1BA9E;`
    }
  }}    
`

const IdText = styled.p`
margin: 0;
font-weight: 700;
font-size: 1.2rem;
padding-top: 20px;
padding-left: 20px;
`
const TypeImage = styled.img`
width: 18px;
height: 18px;

`

const NameText = styled.h2`
margin: 0;
font-size: 1.6rem;
padding-left: 20px;
font-weight: 700;
`

const TypesDiv = styled.div`
display: flex;
gap: 7px;
padding: 10px 0 0 20px;
`

const TypeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
border: 1px dashed rgba(255, 255, 255, 0.47);
padding: 5px 8px;
gap: 10px;
border-radius: 8px;
background-color: #729F92;
${({ color }) => {
    switch (color) {
      case 'grass':
        return css`
        background-color: #70B873;`
      case 'water':
        return css`
        background-color: #33A4F5;`
      case 'fire':
        return css`
        background-color: #F44900;`
      case 'bug':
        return css`
        background-color: #316520;`
      case 'normal':
        return css`
        background-color: #8A8A8A;`
      case 'poison':
        return css`
        background-color: #AD61AE;`
      case 'flying':
        return css`
        background-color: #6892B0;`
      case 'dark':
        return css`
        background-color: #5a5366;`
      case 'ghost':
        return css`
        background-color: #5269AC;`
      case 'steel':
        return css`
        background-color: #5A8EA1;`
      case 'electric':
        return css`
        background-color: #F3D23B;`
      case 'fighting':
        return css`
        background-color: #CE4069;`
      case 'fairy':
        return css`
        background-color: #EC8FE6;`
      case 'psychic':
        return css`
        background-color: #F97176;`
      case 'ice':
        return css`
        background-color: #74CEC0;`
      case 'dragon':
        return css`
        background-color: #096DC4;`
      case 'rock':
        return css`
        background-color: #C7B78B;`
      case 'ground':
        return css`
        background-color: #D97746;`
    }
  }}  
`
const TypeText = styled.p`
margin: 0;
font-size: 0.8rem;
`
export default function PokeCard({ id, name, sprites, stats, moves, types, captured}) {
  const [color, setColor] = useState('')
  const [color2, setColor2] = useState('')
  const { onCapture, onDelete, getDetails, details, } = useContext(GlobalContext)
  const navigate = useNavigate()

  const allTypes = types.map(item => item.type.name)
  const type = allTypes[0]
  const type2 = allTypes[1]
  useEffect(() => {
    if (type === 'grass') {
      setColor('grass')
    } else if (type === 'water') {
      setColor('water')
    } else if (type === 'fire') {
      setColor('fire')
    } else if (type === 'bug') {
      setColor('bug')
    } else if (type === 'normal') {
      setColor('normal')
    } else if (type === 'poison') {
      setColor('poison')
    } else if (type === 'flying') {
      setColor('flying')
    } else if (type === 'dark') {
      setColor('dark')
    } else if (type === 'dragon') {
      setColor('dragon')
    } else if (type === 'electric') {
      setColor('electric')
    } else if (type === 'fairy') {
      setColor('fairy')
    } else if (type === 'fighting') {
      setColor('fighting')
    } else if (type === 'ghost') {
      setColor('ghost')
    } else if (type === 'ground') {
      setColor('ground')
    } else if (type === 'ice') {
      setColor('ice')
    } else if (type === 'psychic') {
      setColor('psychic')
    } else if (type === 'rock') {
      setColor('rock')
    } else if (type === 'steel') {
      setColor('steel')
    }


    if (type2 === 'grass') {
      setColor2('grass')
    } else if (type2 === 'water') {
      setColor2('water')
    } else if (type2 === 'fire') {
      setColor2('fire')
    } else if (type2 === 'bug') {
      setColor2('bug')
    } else if (type2 === 'normal') {
      setColor2('normal')
    } else if (type2 === 'poison') {
      setColor2('poison')
    } else if (type2 === 'flying') {
      setColor2('flying')
    } else if (type2 === 'dark') {
      setColor2('dark')
    } else if (type2 === 'dragon') {
      setColor2('dragon')
    } else if (type2 === 'electric') {
      setColor2('electric')
    } else if (type2 === 'fairy') {
      setColor2('fairy')
    } else if (type2 === 'fighting') {
      setColor2('fighting')
    } else if (type2 === 'ghost') {
      setColor2('ghost')
    } else if (type2 === 'ground') {
      setColor2('ground')
    } else if (type2 === 'ice') {
      setColor2('ice')
    } else if (type2 === 'psychic') {
      setColor2('psychic')
    } else if (type2 === 'rock') {
      setColor2('rock')
    } else if (type2 === 'steel') {
      setColor2('steel')
    }
  })




  return (
    <Main>
      <Container color={color}>
        <TopContainer>
          <TopDiv>
            <IdText>#{id}</IdText>
            <NameText>{name}</NameText>
            {types.length === 1 ?
              <TypesDiv>
                <TypeContainer color={color}>
                  {(color === 'grass') ? <TypeImage src={TypeGrass} /> : null}
                  {(color === 'water') ? <TypeImage src={TypeWater} /> : null}
                  {(color === 'fire') ? <TypeImage src={TypeFire} /> : null}
                  {(color === 'normal') ? <TypeImage src={TypeNormal} /> : null}
                  {(color === 'bug') ? <TypeImage src={TypeBug} /> : null}
                  {(color === 'poison') ? <TypeImage src={TypePoison} /> : null}
                  {(color === 'flying') ? <TypeImage src={TypeFlying} /> : null}
                  {(color === 'dark') ? <TypeImage src={TypeDark} /> : null}
                  {(color === 'dragon') ? <TypeImage src={TypeDragon} /> : null}
                  {(color === 'electric') ? <TypeImage src={TypeElectric} /> : null}
                  {(color === 'fairy') ? <TypeImage src={TypeFairy} /> : null}
                  {(color === 'fighting') ? <TypeImage src={TypeFighting} /> : null}
                  {(color === 'ghost') ? <TypeImage src={TypeGhost} /> : null}
                  {(color === 'ground') ? <TypeImage src={TypeGround} /> : null}
                  {(color === 'ice') ? <TypeImage src={TypeIce} /> : null}
                  {(color === 'psychic') ? <TypeImage src={TypePsychic} /> : null}
                  {(color === 'rock') ? <TypeImage src={TypeRock} /> : null}
                  {(color === 'steel') ? <TypeImage src={TypeSteel} /> : null}
                  <TypeText>{type.charAt(0).toUpperCase() + type.slice(1)}</TypeText>
                </TypeContainer>
              </TypesDiv>
              :
              <TypesDiv>
                <TypeContainer color={color}>
                  {(color === 'grass') ? <TypeImage src={TypeGrass} /> : null}
                  {(color === 'water') ? <TypeImage src={TypeWater} /> : null}
                  {(color === 'fire') ? <TypeImage src={TypeFire} /> : null}
                  {(color === 'normal') ? <TypeImage src={TypeNormal} /> : null}
                  {(color === 'bug') ? <TypeImage src={TypeBug} /> : null}
                  {(color === 'poison') ? <TypeImage src={TypePoison} /> : null}
                  {(color === 'flying') ? <TypeImage src={TypeFlying} /> : null}
                  {(color === 'dark') ? <TypeImage src={TypeDark} /> : null}
                  {(color === 'dragon') ? <TypeImage src={TypeDragon} /> : null}
                  {(color === 'electric') ? <TypeImage src={TypeElectric} /> : null}
                  {(color === 'fairy') ? <TypeImage src={TypeFairy} /> : null}
                  {(color === 'fighting') ? <TypeImage src={TypeFighting} /> : null}
                  {(color === 'ghost') ? <TypeImage src={TypeGhost} /> : null}
                  {(color === 'ground') ? <TypeImage src={TypeGround} /> : null}
                  {(color === 'ice') ? <TypeImage src={TypeIce} /> : null}
                  {(color === 'psychic') ? <TypeImage src={TypePsychic} /> : null}
                  {(color === 'rock') ? <TypeImage src={TypeRock} /> : null}
                  {(color === 'steel') ? <TypeImage src={TypeSteel} /> : null}
                  <TypeText>{type.charAt(0).toUpperCase() + type.slice(1)}</TypeText>
                </TypeContainer>
                <TypeContainer color={color2}>
                  {(color2 === 'grass') ? <TypeImage src={TypeGrass} /> : null}
                  {(color2 === 'water') ? <TypeImage src={TypeWater} /> : null}
                  {(color2 === 'fire') ? <TypeImage src={TypeFire} /> : null}
                  {(color2 === 'normal') ? <TypeImage src={TypeNormal} /> : null}
                  {(color2 === 'bug') ? <TypeImage src={TypeBug} /> : null}
                  {(color2 === 'poison') ? <TypeImage src={TypePoison} /> : null}
                  {(color2 === 'flying') ? <TypeImage src={TypeFlying} /> : null}
                  {(color2 === 'dark') ? <TypeImage src={TypeDark} /> : null}
                  {(color2 === 'dragon') ? <TypeImage src={TypeDragon} /> : null}
                  {(color2 === 'electric') ? <TypeImage src={TypeElectric} /> : null}
                  {(color2 === 'fairy') ? <TypeImage src={TypeFairy} /> : null}
                  {(color2 === 'fighting') ? <TypeImage src={TypeFighting} /> : null}
                  {(color2 === 'ghost') ? <TypeImage src={TypeGhost} /> : null}
                  {(color2 === 'ground') ? <TypeImage src={TypeGround} /> : null}
                  {(color2 === 'ice') ? <TypeImage src={TypeIce} /> : null}
                  {(color2 === 'psychic') ? <TypeImage src={TypePsychic} /> : null}
                  {(color2 === 'rock') ? <TypeImage src={TypeRock} /> : null}
                  {(color2 === 'steel') ? <TypeImage src={TypeSteel} /> : null}
                  <TypeText>{type2.charAt(0).toUpperCase() + type2.slice(1)}</TypeText>
                </TypeContainer>
              </TypesDiv>
            }
          </TopDiv>
          <Image src={sprites.other["official-artwork"].front_default} />
        </TopContainer>
        <BottomDiv>
          {captured ? <ButtonExcluir onClick={() => onDelete(id, name, sprites, stats, moves, types, false)}>Excluir</ButtonExcluir> :
            <ButtonCapturar onClick={() => onCapture(id, name, sprites, stats, moves, types, true)}>Capturar!</ButtonCapturar>}
          <ButtonDetalhes to="/details" color={color} onClick={() => getDetails(id, name, sprites, stats, moves, types, captured)}>Detalhes</ButtonDetalhes>
        </BottomDiv>
      </Container>
    </Main>
  )
}
