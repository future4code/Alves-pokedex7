import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
width: 20vw;
height: 25vh;
border: 1px solid black;
margin: 20px;
`

const Image = styled.img`
width: 50%;
`
export default function PokeCard({name, url}) {
  return (
    <Main>
        <h2>Nome: {name}</h2>
        <h2>URL: {url}</h2>
        <Image src='' />

    </Main>
  )
}
