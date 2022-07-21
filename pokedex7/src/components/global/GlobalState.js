import React, { useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'
import { filter } from '@chakra-ui/react'


export default function GlobalState(props) {
    const [infos, setInfos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [previousUrl, setPreviousUrl] = useState(null)

    const getPokemons = async (url) => {
        const resp = await axios.get(url)
        const newArr = []
        for (let i = 0; i < resp.data.results.length; i++) {
            if (i == 0 && infos.length != 0) {
                return;
            }
            const tempResp = await axios.get(resp.data.results[i].url)
            newArr.push(tempResp.data)
        }
        await setInfos(newArr)
        await setIsLoading(false)
    }

    const nextPage = async (url) => {
        const resp = await axios.get(url)
        const idsPokedex = pokedex.map((item) => {
            return item.id
        })
        const newArr = []
        setCurrentUrl(nextUrl)
        setNextUrl(resp.data.next)
        setPreviousUrl(resp.data.previous)
        for (let i = 0; i < resp.data.results.length; i++) {
            const tempResp = await axios.get(resp.data.results[i].url)
            newArr.push(tempResp.data)
        }
        const filterResp = newArr.filter((item) => {
            return !idsPokedex.includes(item.id)
        })
        await setInfos(filterResp)
        await setIsLoading(false)
    }

    const previousPage = async (url) => {
        const resp = await axios.get(url)
        const idsPokedex = pokedex.map((item) => {
            return item.id
        })
        const newArr = []
        setCurrentUrl(previousUrl)
        setNextUrl(resp.data.next)
        setPreviousUrl(resp.data.previous)
        for (let i = 0; i < resp.data.results.length; i++) {
            const tempResp = await axios.get(resp.data.results[i].url)
            newArr.push(tempResp.data)
        }
        const filterResp = newArr.filter((item) => {
            return !idsPokedex.includes(item.id)
        })
        await setInfos(filterResp)
        await setIsLoading(false)
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
        console.log(newPokedex, infos)
        setPokedex(newPokedex)
    }

    const [details, setDetails] = useState({})
    const getDetails = (id, name, imgfront, imgback, stats, moves, types) => {
        const body = {
            id: id,
            name: name,
            imgback: imgback,
            imgfront: imgfront,
            stats: stats,
            moves: moves,
            types: types,
        }
        setDetails(body)
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
        onDelete,
        getDetails,
        details,
        nextUrl,
        nextPage,
        previousPage,
        previousUrl,
        currentUrl,
        setCurrentUrl
    }
    return (<Provider value={values}>{props.children}</Provider>)
}
