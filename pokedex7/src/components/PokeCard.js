import React, { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import TypeGrass from '../img/grass.png'
import TypeBug from '../img/bug.png'
import TypeWater from '../img/water.png'
import TypeFire from '../img/fire.png'
import TypeNormal from '../img/normal.png'
import TypeFlying from '../img/flying.png'
import TypePoison from '../img/poison.png'
import { GlobalContext } from './global/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../routes/coordinator'


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
        background-color: #BF9762;`
      case 'flying':
        return css`
        background-color: #95D1FC;`
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
width: 200px;
height: 200px;
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
font-weight: 700;
font-size: 1rem;
font-family: 'Poppins';
opacity: 0.9;
:hover { 
  cursor: pointer;
  opacity: 1;
}
@media (min-width: 365px) and (max-width: 763px){ 
  margin-left: 150px;
}
`

const ButtonExcluir = styled.button`
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
font-weight: 700;
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

const ButtonDetalhes = styled.button`
width: 74px;
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
        background-color: #BF9762;`
      case 'flying':
        return css`
        background-color: #95D1FC;`
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
    }
  }}  
`
const TypeText = styled.p`
margin: 0;
font-size: 0.8rem;
font-weight:700;
`
export default function PokeCard({ name, image, id, types, captured }) {
  const [color, setColor] = useState('')
  const [color2, setColor2] = useState('')
  const { onCapture, onDelete } = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    const type = types[0]
    const type2 = types[1]
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
    }
    console.log(type)
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
                  <TypeText>{types[0].toUpperCase()}</TypeText>
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
                  <TypeText>{types[0].toUpperCase()}</TypeText>
                </TypeContainer>
                <TypeContainer color={color2}>
                  {(color2 === 'grass') ? <TypeImage src={TypeGrass} /> : null}
                  {(color2 === 'water') ? <TypeImage src={TypeWater} /> : null}
                  {(color2 === 'fire') ? <TypeImage src={TypeFire} /> : null}
                  {(color2 === 'normal') ? <TypeImage src={TypeNormal} /> : null}
                  {(color2 === 'bug') ? <TypeImage src={TypeBug} /> : null}
                  {(color2 === 'poison') ? <TypeImage src={TypePoison} /> : null}
                  {(color2 === 'flying') ? <TypeImage src={TypeFlying} /> : null}
                  <TypeText>{types[1].toUpperCase()}</TypeText>
                </TypeContainer>
              </TypesDiv>
            }
          </TopDiv>
          <Image src={image} />
        </TopContainer>
        <BottomDiv>
          <ButtonDetalhes color={color} onClick={() => goToDetailsPage(navigate)}>Details</ButtonDetalhes>
          {captured ? <ButtonExcluir onClick={() => onDelete(id)}>Soltar</ButtonExcluir> :
            <ButtonCapturar onClick={() => onCapture(name, image, id, types, true)}>Capturar!</ButtonCapturar>}
        </BottomDiv>
      </Container>
    </Main>
  )
}
