import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from './global/GlobalContext'

const Main = styled.div`
display: flex;
height: 5vh;
gap: 5%;
padding: 15px;
background-color: white;
justify-content: center;
`

const Container = styled.div`
display: flex;
width: 20%;
justify-content:space-between;
`

const NextButton = styled.button`
padding: 4px 10px;
width: 146px;
height: 38px;
background: #33A4F5;
color: white;
border-radius: 8px;
border: 0px;
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

const PreviousButton = styled.button`
padding: 4px 10px;
width: 146px;
height: 38px;
background: #33A4F5;
color: white;
border-radius: 8px;
border: 0px;
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

export default function Footer() {
    const { nextUrl, nextPage, previousUrl, previousPage, getPokemons } = useContext(GlobalContext)

    return (
        <Main>
            <Container>
                <PreviousButton onClick={() => previousPage(previousUrl)}>Previous</PreviousButton>
                <NextButton onClick={() => nextPage(nextUrl)}>Next</NextButton>
            </Container>
        </Main>
    )
}