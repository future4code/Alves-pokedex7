import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import PokeCard from '../components/PokeCard'
import { ContextoPokemon } from '../context'

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
export default function HomePage() {
    const [infos, setInfos] = useState([])
    const [resp, setResp] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getPokemons = async () => {
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
        const newArr = []
        for(let i =0; i< resp.data.results.length; i++) {
            if (i == 0 && infos.length != 0){
                return;
            }
            const tempResp = await axios.get(resp.data.results[i].url)
            newArr.push(tempResp.data)
            console.log(tempResp.data)
        }
        await setInfos(newArr)
        await setIsLoading(false)
        console.log('acabamos')
    }


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
                />
            })}
        </Main>
    )
}

