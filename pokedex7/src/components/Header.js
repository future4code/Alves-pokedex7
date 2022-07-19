import React, { useContext } from 'react'
import styled from 'styled-components'
import { ContextoPokemon } from '../context'

const Main = styled.div`
display: flex;
width: 100%;
height: 10vh;
border-bottom: 1px solid black;
align-items: center;
justify-content: center;
background-color: lightblue;
`

export default function Header() {
  const pokemon = useContext(ContextoPokemon)
  return (
    <Main>
      <h2>{pokemon}</h2>
      <h2>HEADER</h2>
    </Main>
  )
}
