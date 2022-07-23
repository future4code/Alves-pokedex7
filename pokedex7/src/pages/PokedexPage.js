import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../components/global/GlobalContext'
import PokeCard from '../components/PokeCard'
import styled from 'styled-components'
import DeleteAlert from '../components/DeleteAlert'

const Container = styled.div`
background: #5E5E5E;
font-family: 'Poppins';
display: grid;
grid-template-columns: auto auto auto auto;
grid-template-rows: 250px 250px 250px 250px;
min-height: 100vh;
gap: 1%;
justify-content: center;
padding-bottom: 100px;
@media (min-width: 365px) and (max-width: 763px){ 
    grid-template-columns: 100%;
    gap: 0.1%;
}
`

const Title = styled.h2`
background: #5E5E5E;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px; 
padding: 50px 0 20px 40px;
`

export default function PokedexPage() {
  const { pokedex, deleteSuccess } = useContext(GlobalContext)

  return (
    <div>
      <Title>Meus Pokemons</Title>
      {deleteSuccess && <DeleteAlert isOpen={deleteSuccess}></DeleteAlert>}
      <Container>
        {
          pokedex && pokedex.map((item) => {
            return <PokeCard
              id={item.id}
              name={item.name.toUpperCase()}
              sprites={item.sprites}
              stats={item.stats}
              moves={item.moves}
              types={item.types}
              captured={true}
            />
          })}
      </Container>

    </div>

  )
}
