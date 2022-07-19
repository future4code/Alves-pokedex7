import React from 'react'
import styled from 'styled-components'
import Pngwing2 from '../img/pngwing2.png'

const Main = styled.div`
display: flex;
width: 440px;
height: 263px;
/* margin-left: 40px;
margin-top: 294px; */
border: 1px solid black;
flex-direction: column;
`

const TopContainer = styled.div`
display: flex;
width: 50%;
/* margin-left: 40px;
margin-top: 294px; */
border: 1px solid black;
flex-direction: column;
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
width: 50%;
`

const Image2 = styled.img`
width: 210.73px;
height: 210.73px;
position: absolute;

`
export default function PokeCard({ name, image }) {

  return (
    <Main>
      <TopContainer>
        <h2>{name}</h2>
        <Image src={image} />
      </TopContainer>
      <BottomDiv></BottomDiv>
      <Image2 src={Pngwing2} />
    </Main>
  )
}
