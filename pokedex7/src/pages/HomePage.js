import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../components/global/GlobalContext'
import PokeCard from '../components/PokeCard'

const Main = styled.div`
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
export default function HomePage() {
    const {infos, setInfos, getPokemons, isLoading, setIsLoading} = useContext(GlobalContext)
    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <Main>
            {isLoading ? <h1>Loading</h1> :
            infos && infos.map((item) => {
                return <PokeCard 
                name={item.name.toUpperCase()} 
                image={item.sprites.front_default}
                id={item.id}
                types={item.types.map((type) => type.type.name)}
                imageBack={item.sprites.back_default}
                stats={item.stats}
                moves={item.moves}
                />
            })}
        </Main>
    )
}

