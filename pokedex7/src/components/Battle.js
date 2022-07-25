import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    useOutsideClick,
    Select,
    CloseButton,
    Heading,
    Flex,
    Text
} from '@chakra-ui/react'
import { GlobalContext } from './global/GlobalContext';
import PokeCard from './PokeCard';
import WinAlert from './WinAlert';

const Container = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`
const StatInfo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
progress {
  margin: 7px;
}
`
const StatName = styled.div`
display: flex;
flex-direction: column;
width: 90px;
align-items: flex-end;
margin-right: 20px;
p {
  margin: 3px;
}
`
const StatValue = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 20px;
p {
  margin: 3px;
}
`

export default function Battle() {
    const { pokedex, setBattle, setWinAlert, winAlert } = useContext(GlobalContext)
    const [chosenPokemon, setChosenPokemon] = useState('')
    const [chosenPokemon2, setChosenPokemon2] = useState('')
    const [winnerName, setWinnerName] = useState('')
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [compareHp, setCompareHp] = useState(false)
    const [compareAtk, setCompareAtk] = useState(false)
    const [compareDef, setCompareDef] = useState(false)
    const [compareSatk, setCompareSatk] = useState(false)
    const [compareSdef, setCompareSdef] = useState(false)
    const [compareSpd, setCompareSpd] = useState(false)

    const showingPokemon = pokedex.filter((item) => {
        return item.name === chosenPokemon.toLowerCase()
    })

    const showingPokemon2 = pokedex.filter((item) => {
        return item.name === chosenPokemon2.toLowerCase()
    })

    const onFight = () => {
        let stats1 = showingPokemon[0].stats.map((item) => {
            return item.base_stat
        })
        const sum1 = stats1.reduce((partialSum, a) => partialSum + a, 0)
        let stats2 = showingPokemon2[0].stats.map((item) => {
            return item.base_stat
        })
        const sum2 = stats2.reduce((partialSum, a) => partialSum + a, 0)
        if (sum1 > sum2) {
            setWinnerName(chosenPokemon)
            setWinAlert(true)
        } else if (sum2 > sum1) {
            setWinnerName(chosenPokemon2)
            setWinAlert(true)
        }
    }

    useEffect(() => {
        if (chosenPokemon && chosenPokemon2) {
            let tempCompareHp = (showingPokemon[0].stats[0].base_stat > showingPokemon2[0].stats[0].base_stat)
            setCompareHp(tempCompareHp)
            let tempCompareAtk = (showingPokemon[0].stats[1].base_stat > showingPokemon2[0].stats[1].base_stat)
            setCompareAtk(tempCompareAtk)
            let tempCompareDef = (showingPokemon[0].stats[2].base_stat > showingPokemon2[0].stats[2].base_stat)
            setCompareDef(tempCompareDef)
            let tempCompareSatk = (showingPokemon[0].stats[3].base_stat > showingPokemon2[0].stats[3].base_stat)
            setCompareSatk(tempCompareSatk)
            let tempCompareSdef = (showingPokemon[0].stats[4].base_stat > showingPokemon2[0].stats[4].base_stat)
            setCompareSdef(tempCompareSdef)
            let tempCompareSpd = (showingPokemon[0].stats[5].base_stat > showingPokemon2[0].stats[5].base_stat)
            setCompareSpd(tempCompareSpd)
        }
    })

    return (
        <>
            <Modal isOpen={onOpen} autoFocus isCentered={true} size={'6xl'}>
                <ModalOverlay />
                <ModalContent alignItems={'center'} fontFamily={'Poppins'} justifyContent={'center'}>
                    <CloseButton marginLeft={'1100px'} marginTop={'10px'} onClick={() => setBattle(false)}></CloseButton>
                    <ModalHeader fontSize={'48px'} fontWeight={700} paddingTop={'20px'} paddingBottom={'20px'} color={'red'}>Batalha Pokémon</ModalHeader>
                    <ModalBody fontSize={'16px'} paddingBottom={'40px'} paddingTop={'0px'}>
                        Escolha dois pokémons para a batalha
                    </ModalBody>
                    <Flex justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                        <Flex flexDir={'column'} alignItems={'center'} w={'50%'}>
                            <Container>
                                <Select maxW={'50%'} onChange={(e) => { setChosenPokemon(e.target.value) }} placeholder='Escolha um pokémon' _placeholder={{ color: 'gray.500' }}>
                                    {pokedex.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
                                        </option>
                                    ))}
                                </Select>
                            </Container>
                            <Flex h={'250px'}>
                                {chosenPokemon && showingPokemon.map((item) => {
                                    return <PokeCard
                                        id={item.id}
                                        name={item.name}
                                        sprites={item.sprites}
                                        stats={item.stats}
                                        moves={item.moves}
                                        types={item.types}
                                        captured={true}
                                    />
                                })}
                            </Flex>
                            <Heading paddingY={'40px'}>Stats</Heading>
                            <Flex>
                                <StatInfo>
                                    <StatName>
                                        <p>HP</p>
                                        <p>Attack</p>
                                        <p>Defense</p>
                                        <p>Sp. Atk</p>
                                        <p>Sp. Def</p>
                                        <p>Speed</p>
                                    </StatName>
                                    <Flex w={'50%'}>
                                        {chosenPokemon && <StatValue>
                                            {compareHp ? <Text color={'green.400'}>{showingPokemon[0].stats[0].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon[0].stats[0].base_stat}</Text>}
                                            {compareAtk ? <Text color={'green.400'}>{showingPokemon[0].stats[1].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon[0].stats[1].base_stat}</Text>}
                                            {compareDef ? <Text color={'green.400'}>{showingPokemon[0].stats[2].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon[0].stats[2].base_stat}</Text>}
                                            {compareSatk ? <Text color={'green.400'}>{showingPokemon[0].stats[3].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon[0].stats[3].base_stat}</Text>}
                                            {compareSdef ? <Text color={'green.400'}>{showingPokemon[0].stats[4].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon[0].stats[4].base_stat}</Text>}
                                            {compareSpd ? <Text color={'green.400'}>{showingPokemon[0].stats[5].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon[0].stats[5].base_stat}</Text>}
                                        </StatValue>}
                                    </Flex>
                                </StatInfo>
                            </Flex>
                        </Flex>
                        <Flex flexDir={'column'} alignItems={'center'} w={'50%'}>
                            <Select maxW={'50%'} onChange={(e) => { setChosenPokemon2(e.target.value) }} placeholder='Escolha um pokémon' _placeholder={{ color: 'gray.500' }}>
                                {pokedex.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
                                    </option>
                                ))}
                            </Select>
                            <Flex h={'250px'}>
                                {chosenPokemon2 && showingPokemon2.map((item) => {
                                    return <PokeCard
                                        id={item.id}
                                        name={item.name}
                                        sprites={item.sprites}
                                        stats={item.stats}
                                        moves={item.moves}
                                        types={item.types}
                                        captured={true}
                                    />
                                })}
                            </Flex>
                            <Heading paddingY={'40px'}>Stats</Heading>
                            <Container>
                                <StatInfo>
                                    <StatName>
                                        <p>HP</p>
                                        <p>Attack</p>
                                        <p>Defense</p>
                                        <p>Sp. Atk</p>
                                        <p>Sp. Def</p>
                                        <p>Speed</p>
                                    </StatName>
                                    <Flex w={'20%'}>
                                        {chosenPokemon2 && <StatValue>
                                            {!compareHp ? <Text color={'green.400'}>{showingPokemon2[0].stats[0].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon2[0].stats[0].base_stat}</Text>}
                                            {!compareAtk ? <Text color={'green.400'}>{showingPokemon2[0].stats[1].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon2[0].stats[1].base_stat}</Text>}
                                            {!compareDef ? <Text color={'green.400'}>{showingPokemon2[0].stats[2].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon2[0].stats[2].base_stat}</Text>}
                                            {!compareSatk ? <Text color={'green.400'}>{showingPokemon2[0].stats[3].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon2[0].stats[3].base_stat}</Text>}
                                            {!compareSdef ? <Text color={'green.400'}>{showingPokemon2[0].stats[4].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon2[0].stats[4].base_stat}</Text>}
                                            {!compareSpd ? <Text color={'green.400'}>{showingPokemon2[0].stats[5].base_stat}</Text> : <Text color={'red.400'}>{showingPokemon2[0].stats[5].base_stat}</Text>}
                                        </StatValue>}
                                    </Flex>
                                </StatInfo>
                            </Container>
                        </Flex>
                    </Flex>
                    <Flex paddingY={'20px'}>
                        <Button colorScheme={'red'} onClick={() => onFight()}>Lutar !</Button>
                    </Flex>
                </ModalContent>
                {winAlert && <WinAlert name={winnerName}></WinAlert>}
            </Modal>
        </>
    )
}