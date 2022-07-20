import React, { useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'

export default function GlobalState(props) {
    const [infos, setInfos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getPokemons = async () => {
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
        const newArr = []
        for (let i = 0; i < resp.data.results.length; i++) {
            if (i == 0 && infos.length != 0) {
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

    const [pokedex, setPokedex] = useState([])

    const onCapture = (name, image, id, types, captured) => {
        const ids = pokedex.map((item) => item.id)
        const body = {
            name: name,
            image: image,
            id: id,
            type: types,
            captured: captured
        }
        if (ids.includes(body.id) || pokedex.length >= 6) {
            return
        }
        const newPokemons = infos.filter((item) => {
            return item.id != id
        })
        setPokedex([...pokedex, body])
        setInfos(newPokemons)
    }

    const onDelete = (id) => {
        const newPokedex = pokedex.filter((item) => {
            return item.id != id
        })
        setPokedex(newPokedex)
    }

const Provider = GlobalContext.Provider;

const values = {
    infos,
    setInfos,
    getPokemons,
    isLoading,
    setIsLoading,
    onCapture,
    pokedex,
    onDelete
}
return (<Provider value={values}>{props.children}</Provider>)
}
