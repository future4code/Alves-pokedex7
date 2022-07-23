import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../components/global/GlobalContext'
import PokeCard from '../components/PokeCard'
import Footer from '../components/Footer'

const Container = styled.div`
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
    const { infos, getPokemons, isLoading, currentUrl } = useContext(GlobalContext)

    return (
        <div>
            <Container>
                {isLoading ? <h1>Loading</h1> :
                    infos && infos.map((item) => {
                        return <PokeCard
                            id={item.id}
                            name={item.name.toUpperCase()}
                            sprites={item.sprites}
                            stats={item.stats}
                            moves={item.moves}
                            types={item.types}
                            captured={false}
                        />
                    })}

            </Container>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

