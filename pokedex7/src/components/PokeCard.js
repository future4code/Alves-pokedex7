import React from 'react'
import styled from 'styled-components'
import Pngwing2 from '../img/pngwing2.png'
import TypeGrass from '../img/grass.png'

const Main = styled.div`
display: flex;
width: 440px;
height: 263px;
flex-direction: column;
justify-content: flex-end;
`

const Container = styled.div`
display: flex;
width: 440px;
height: 210px;
flex-direction: column;
background-color: #729F92;
border-radius: 12px;
`

const TopContainer = styled.div`
display: flex;
width: 100%;
height: 80%;
justify-content: space-between;
align-items:center;
`
const TopDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
height: 100%;
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
background-color: lightpink;
border-radius: 8px;
`
const TypeText = styled.p`
margin: 0;
font-size: 0.8rem;
`
export default function PokeCard({ name, image, id }) {

  return (
    <Main>
      <Container>
        <TopContainer>
          <TopDiv>
            <IdText>#{id}</IdText>
            <NameText>{name}</NameText>
            <TypesDiv>
              <TypeContainer>
                <TypeImage src={TypeGrass}/>
                <TypeText>Grass</TypeText>
              </TypeContainer>
              <TypeContainer>
                <TypeImage src={TypeGrass}/>
                <TypeText>Grass</TypeText>
              </TypeContainer>
            </TypesDiv>
          </TopDiv>
          <Image src={image} />
        </TopContainer>
        <BottomDiv>
          <ButtonDetalhes>Details</ButtonDetalhes>
          <ButtonCapturar>Capturar!</ButtonCapturar>
        </BottomDiv>
      </Container>
    </Main>
  )
}
