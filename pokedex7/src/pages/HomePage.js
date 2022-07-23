import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../components/global/GlobalContext'
import PokeCard from '../components/PokeCard'
import Footer from '../components/Footer'
import CapturedAlert from '../components/CapturedAlert'

const Container = styled.div`
font-family: 'Poppins';
display: grid;
grid-template-columns: auto auto auto auto;
grid-template-rows: 250px 250px 250px 250px;
min-height: 100vh;
gap: 1%;
justify-content: center;
background: #5E5E5E;
padding-bottom: 100px;
@media (min-width: 365px) and (max-width: 763px){ 
    grid-template-columns: 100%;
    gap: 0.1%;
}
`

const Title = styled.h2`
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px; 
padding: 50px 0 20px 40px;
margin-bottom: 0;
background: #5E5E5E;
`
export default function HomePage() {
    const { infos, isLoading, success } = useContext(GlobalContext)

    return (
        <div>
            <Title>Todos Pokémons</Title>
            {success && <CapturedAlert isOpen={success}></CapturedAlert>}
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

