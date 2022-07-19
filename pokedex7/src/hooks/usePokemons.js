import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function usePokemons() {
    const [infos, setInfos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
        setIsLoading(true)
        const newArray = []
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
            .then((res) => {
                for (let i = 0; i < res.data.results.length; i++) {
                    axios.get(res.data.results[i].url)
                        .then((res) => {
                            newArray.push(res.data)
                            console.log(res.data)
                        })
                }
                setInfos(newArray)
                setIsLoading(false)
                console.log(isLoading)
            })
            
    }, [])

    return [infos, isLoading]

}
