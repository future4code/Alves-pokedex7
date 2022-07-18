import React from 'react'
import styled from 'styled-components'

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
  return (
    <Main>
       <h2>HEADER</h2>   
    </Main>
  )
}
