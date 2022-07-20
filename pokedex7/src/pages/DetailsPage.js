import React, { useContext } from 'react'
import styled from 'styled-components'

const Main = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
min-height: 100vh;
gap: 1%;
justify-content: center;
padding-bottom: 100px;
@media (min-width: 365px) and (max-width: 763px){ 
    grid-template-columns:auto;
    gap: 0%;
}
`

export default function DetailsPage() {
  return (
    <Main>
            
    </Main>
  )
}
