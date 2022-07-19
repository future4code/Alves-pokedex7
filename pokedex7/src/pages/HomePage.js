import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import PokeCard from '../components/PokeCard'
import { ContextoPokemon } from '../context'
import { usePokemons } from '../hooks/usePokemons'

const Main = styled.div`
display: grid;
justify-content: center;
grid-template-columns: auto auto auto auto;
`
export default function HomePage() {
    // const [pokemons, setPokemons] = useState([])
    const [infos, setInfos] = useState([])
    const [resp, setResp] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    //const [{isInitialRender, updated}, setIsInitialRender] = useState({ })
    // const pokemon = useContext(ContextoPokemon)

    // const [infos, isLoading] = usePokemons()
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

    // const getPokemons2 = async () => {

    //     const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
    //     await setResp(resp)
    //     await setIsLoading(false)
    //     console.log('acabamos')
    // }

    // const getInfos = () => {
    //     pokemons.map((item) => {
    //         axios.get(item.url)
    //             .then((res) => {
    //                 console.log(res.data)
    //                 const newArr = infos
    //                 newArr.push(res.data)
    //                 setInfos(newArr)
    //             })
    //     })
    // }

    useEffect(() => {
        getPokemons()
    }, [])

    // const getALLPokemons = async () => {
    //     let initialUrl = "https://pokeapi.co/api/v2/pokemon/"
    //     while(true) {
    //         const res = await axios(initialUrl)
    //         const body = res.data

    //         await setPokemons(body.results)

    //         body.results.map(async (item) => {
    //             const tempRes = await axios(item.url)
    //             const tempBody = tempRes.data

    //             console.log(tempBody)
    //             const newArr = infos
    //             newArr.push(tempBody)
    //             await setInfos(newArr)
    //         })

    //         if(body.next != null) {
    //             initialUrl = body.next
    //         } else{
    //             break
    //         }
    //     }

    //     console.log('Catched them all')
    // }

    return (
        <Main>
            {/* <h1>Home, {pokemon}</h1> */}
            {/* <button onClick={getPokemons}>Refresh</button> */}
            {/* <button onClick={getPokemons}>Refresh</button> */}
            {isLoading ? <h1>Loading</h1> :
            infos && infos.map((item) => {
                return <PokeCard name={item.name.toUpperCase()} image={item.sprites.front_default}
                />
            })}
        </Main>
    )
}

