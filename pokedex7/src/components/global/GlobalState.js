import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'



export default function GlobalState(props) {
    const [infos, setInfos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [previousUrl, setPreviousUrl] = useState(null)
    const [onHome, setOnHome] = useState(true)
    const [onPokedex, setOnPokedex] = useState(false)
    const [onDetails, setOnDetails] = useState(false)
    const [compareArray, setCompareArray] = useState([])
    const [battle, setBattle] = useState(false)
    const [winAlert, setWinAlert] = useState(false)

    const getPokemons = async (url) => {
        const resp = await axios.get(url)
        const newArr = []
        for (let i = 0; i < resp.data.results.length; i++) {
            if (i == 0 && infos.length != 0) {
                return;
            }
            const tempResp = await axios.get(resp.data.results[i].url)
            const body = {
                id: tempResp.data.id,
                name: tempResp.data.name,
                sprites: tempResp.data.sprites,
                stats: tempResp.data.stats,
                moves: tempResp.data.moves.slice(0, 4),
                types: tempResp.data.types,
            }
            newArr.push(body)
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
    const [success, setSuccess] = useState(false)
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    const onCapture = (id, name, sprites, stats, moves, types, captured) => {
        const ids = pokedex.map((item) => item.id)
        const body = {
            id: id,
            name: name,
            sprites: sprites,
            stats: stats,
            moves: moves,
            types: types,
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
        setSuccess(true)
    }

    const onDelete = (id, name, sprites, stats, moves, types, captured) => {
        const tempArray = infos
        const body = {
            id: id,
            name: name,
            sprites: sprites,
            stats: stats,
            moves: moves,
            types: types,
            captured: captured
        }
        const newPokedex = pokedex.filter((item) => {
            return item.id != id
        })
        setPokedex(newPokedex)
        tempArray.push(body)
        tempArray.sort((a, b) => a.id - b.id)
        setInfos(tempArray)
        setDeleteSuccess(true)
    }

    const [details, setDetails] = useState({})
    const getDetails = (id, name, sprites, stats, moves, types, captured, color) => {
        const body = {
            id: id,
            name: name,
            sprites: sprites,
            stats: stats,
            moves: moves,
            types: types,
            captured: captured,
            color: color
        }
        setDetails(body)
        setOnDetails(true)
        setOnHome(false)
        setOnPokedex(false)
    }

    useEffect(() => {
        getPokemons(currentUrl)
    }, [isLoading])

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
        setCurrentUrl,
        onHome,
        setOnHome,
        onPokedex,
        setOnPokedex,
        onDetails,
        setOnDetails,
        success,
        setSuccess,
        deleteSuccess,
        setDeleteSuccess,
        setDetails,
        compareArray,
        setCompareArray,
        battle,
        setBattle,
        winAlert,
        setWinAlert
    }
    return (<Provider value={values}>{props.children}</Provider>)
}
