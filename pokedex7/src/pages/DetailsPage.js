import React, { useContext, useEffect, useState } from "react";
import styled, { css } from 'styled-components'
import TypeGrass from '../img/grass.png'
import TypeBug from '../img/bug.png'
import TypeWater from '../img/water.png'
import TypeFire from '../img/fire.png'
import TypeNormal from '../img/normal.png'
import TypeFlying from '../img/flying.png'
import TypePoison from '../img/poison.png'
import TypeSteel from '../img/steel.png'
import TypeRock from '../img/rock.png'
import TypePsychic from '../img/psychic.png'
import TypeIce from '../img/ice.png'
import TypeGround from '../img/ground.png'
import TypeGhost from '../img/ghost.png'
import TypeFighting from '../img/fighting.png'
import TypeDark from '../img/dark.png'
import TypeDragon from '../img/dragon.png'
import TypeFairy from '../img/fairy.png'
import TypeElectric from '../img/electric.png'
import { GlobalContext } from "../components/global/GlobalContext";

const Main = styled.div`
color: black;
`

const Title = styled.h2`
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px; 
margin-left: 260px;
margin-top: 60px;
`

const Main2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column; 
`;

const CardDetalhe = styled.div`
  display: flex;
  align-items: center;
  width: 1389.14px;
  height: 663px;
  border-radius: 12px; 
  background-color: #729F92;
  ${({ color }) => {
    switch (color) {
      case 'grass':
        return css`
        background-color: #729F92;`
      case 'water':
        return css`
        background-color: #71C3FF;`
      case 'fire':
        return css`
        background-color: #EAAB7D;`
      case 'bug':
        return css`
        background-color: #76A866;`
      case 'normal':
        return css`
        background-color: #BF9762;`
      case 'poison':
        return css`
        background-color: #AF97BA;`
      case 'flying':
        return css`
        background-color: #95D1FC;`
      case 'dark':
        return css`
        background-color: #958DA5;`
      case 'ghost':
        return css`
        background-color: #A3B7F0;`
      case 'steel':
        return css`
        background-color: #97C5D6;`
      case 'electric':
        return css`
        background-color: #F1E4A8;`
      case 'fighting':
        return css`
        background-color: #C78094;`
      case 'fairy':
        return css`
        background-color: #EBABE6;`
      case 'psychic':
        return css`
        background-color: #E2B1B2;`
      case 'ice':
        return css`
        background-color: #B9E7E0;`
      case 'dragon':
        return css`
        background-color: #489AE1;`
      case 'rock':
        return css`
        background-color: #E2DAC3;`
      case 'ground':
        return css`
        background-color: #F1BA9E;`
    }
  }}
`;

const CardFotos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 17px;
`;

const FotoFrente = styled.div`
width: 282px;
height: 282px;
margin-left: 44px;
background-color: white;
border-radius: 8px;
img {
  display: flex;
  position: absolute;
  width: 200px;
  height: 200px;
  margin: 30px 35px 35px 34px;
}
`;

const FotoTras = styled.div`
width: 282px;
height: 282px;
margin-top: 26px;
margin-left: 44px;
background-color: white;
border-radius: 8px;
img {
  display: flex;
  position: absolute;
  width: 200px;
  height: 200px;
  margin: 30px 35px 25px 34px;
}
`;

const Status = styled.div`
width: 343px;
height: 613px;
margin: 24px 0 24px 25px;
font-size: 0.9rem;
background-color: white;
border-radius: 8px;
h2 {
  padding: 10px 0 0 40px;
  font-size: 2rem;
}
`

const CardMoves = styled.div`
width: 292px;
height: 453px;
margin: 183px 25px 24px 68px;
background-color: white;
border-radius: 8px;
display: inline-block;
flex-direction: column;
ul {
  margin-bottom: 20px;
  padding-left: 20px;
}
li {
display: inline-block;
align-items: flex-start;
padding: 10px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
}
h2 {
  padding: 20px;
  margin: 0;
}
`;

const NamePoke = styled.div` 
  display: flex;
  position: absolute;
  margin: 39px 380.14px 566px 771px;
  color: white;
`;

const IdPoke = styled.div` 
  display: flex;
  position: absolute;
  font-size: 14px;
  margin: 24px 585.14px 620px 774px;
  color: white;
`;

const FotoPoke = styled.div`
  display: flex;
  position: absolute;
  width: 270px;
  height: 270px;
  margin: -110px 35px 525px 2084px;
`;


const PokeType = styled.div`
position: absolute;
margin-left: 750px;
margin-bottom: 450px;
`;

const TypesDiv = styled.div`
display: flex;
gap: 7px;
padding: 10px 0 0 20px;
`

const TypeContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
border: 1px dashed rgba(255, 255, 255, 0.47);
gap: 10px;
border-radius: 8px;
background-color: #729F92;
${({ color }) => {
    switch (color) {
      case 'grass':
        return css`
        background-color: #70B873;`
      case 'water':
        return css`
        background-color: #33A4F5;`
      case 'fire':
        return css`
        background-color: #F44900;`
      case 'bug':
        return css`
        background-color: #316520;`
      case 'normal':
        return css`
        background-color: #8A8A8A;`
      case 'poison':
        return css`
        background-color: #AD61AE;`
      case 'flying':
        return css`
        background-color: #6892B0;`
      case 'dark':
        return css`
        background-color: #5a5366;`
      case 'ghost':
        return css`
        background-color: #5269AC;`
      case 'steel':
        return css`
        background-color: #5A8EA1;`
      case 'electric':
        return css`
        background-color: #F3D23B;`
      case 'fighting':
        return css`
        background-color: #CE4069;`
      case 'fairy':
        return css`
        background-color: #EC8FE6;`
      case 'psychic':
        return css`
        background-color: #F97176;`
      case 'ice':
        return css`
        background-color: #74CEC0;`
      case 'dragon':
        return css`
        background-color: #096DC4;`
      case 'rock':
        return css`
        background-color: #C7B78B;`
      case 'ground':
        return css`
        background-color: #D97746;`
    }
  }}  
`
const TypeText = styled.p`
margin: 0;
font-size: 0.8rem;
font-weight:700;
`
const TypeImage = styled.img`
width: 18px;
height: 18px;
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
const StatInfo = styled.div`
display: flex;
progress {
  margin: 7px;
}
`

const TotalStats = styled.p`
margin-right: 170px;
margin-bottom: 50px;
`
const BaseStat = styled.p`
margin: 3px;
`
export default function DetailsPage() {
  const { details } = useContext(GlobalContext)
  const [color, setColor] = useState('')
  const [color2, setColor2] = useState('')

  console.log(details.types)
  const allTypes = details.types.map(item => item.type.name)
  const type = allTypes[0]
  const type2 = allTypes[1]

  useEffect(() => {
    if (type === 'grass') {
      setColor('grass')
    } else if (type === 'water') {
      setColor('water')
    } else if (type === 'fire') {
      setColor('fire')
    } else if (type === 'bug') {
      setColor('bug')
    } else if (type === 'normal') {
      setColor('normal')
    } else if (type === 'poison') {
      setColor('poison')
    } else if (type === 'flying') {
      setColor('flying')
    } else if (type === 'dark') {
      setColor('dark')
    } else if (type === 'dragon') {
      setColor('dragon')
    } else if (type === 'electric') {
      setColor('electric')
    } else if (type === 'fairy') {
      setColor('fairy')
    } else if (type === 'fighting') {
      setColor('fighting')
    } else if (type === 'ghost') {
      setColor('ghost')
    } else if (type === 'ground') {
      setColor('ground')
    } else if (type === 'ice') {
      setColor('ice')
    } else if (type === 'psychic') {
      setColor('psychic')
    } else if (type === 'rock') {
      setColor('rock')
    } else if (type === 'steel') {
      setColor('steel')
    }


    if (type2 === 'grass') {
      setColor2('grass')
    } else if (type2 === 'water') {
      setColor2('water')
    } else if (type2 === 'fire') {
      setColor2('fire')
    } else if (type2 === 'bug') {
      setColor2('bug')
    } else if (type2 === 'normal') {
      setColor2('normal')
    } else if (type2 === 'poison') {
      setColor2('poison')
    } else if (type2 === 'flying') {
      setColor2('flying')
    } else if (type2 === 'dark') {
      setColor2('dark')
    } else if (type2 === 'dragon') {
      setColor2('dragon')
    } else if (type2 === 'electric') {
      setColor2('electric')
    } else if (type2 === 'fairy') {
      setColor2('fairy')
    } else if (type2 === 'fighting') {
      setColor2('fighting')
    } else if (type2 === 'ghost') {
      setColor2('ghost')
    } else if (type2 === 'ground') {
      setColor2('ground')
    } else if (type2 === 'ice') {
      setColor2('ice')
    } else if (type2 === 'psychic') {
      setColor2('psychic')
    } else if (type2 === 'rock') {
      setColor2('rock')
    } else if (type2 === 'steel') {
      setColor2('steel')
    }
  })
  const statsValues = details.stats.map(item => item.base_stat)
  const sum = statsValues.reduce((partialSum, a) => partialSum + a, 0)
  return (
    <Main>
      <Title>Detalhes</Title>
      <Main2>
        <CardDetalhe color={color}>
          <NamePoke>
            <h2>{details.name}</h2>
          </NamePoke>
          <IdPoke>
            <h2>#{details.id}</h2>
          </IdPoke>
          <CardFotos>
            <FotoPoke>
              <img src={details.sprites.other["official-artwork"].front_default}></img>
            </FotoPoke>
            <FotoFrente>
              <img src={details.sprites.front_default}></img>
            </FotoFrente>
            <FotoTras>
              <img src={details.sprites.back_default}></img>
            </FotoTras>
          </CardFotos>
          <Status>
            <h2>Base Stats</h2>
            <StatInfo>
              <StatName>
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Sp. Atk</p>
                <p>Sp. Def</p>
                <p>Speed</p>
                <p>Total</p>
              </StatName>
              <StatValue>
                <p>{details.stats[0].base_stat}</p>
                <p>{details.stats[1].base_stat}</p>
                <p>{details.stats[2].base_stat}</p>
                <p>{details.stats[3].base_stat}</p>
                <p>{details.stats[4].base_stat}</p>
                <p>{details.stats[5].base_stat}</p>
                <strong><p>{sum}</p></strong>
              </StatValue>
              <StatValue>
                <progress value={details.stats[0].base_stat} max={100} />
                <progress value={details.stats[1].base_stat} max={100} />
                <progress value={details.stats[2].base_stat} max={100} />
                <progress value={details.stats[3].base_stat} max={100} />
                <progress value={details.stats[4].base_stat} max={100} />
                <progress value={details.stats[5].base_stat} max={100} />
              </StatValue>
            </StatInfo>
          </Status>
          <CardMoves>
            <h2>Moves</h2>
            {details &&
              details.moves.map((move, index) => {
                return (
                  index < 5 && (
                    <ul>
                      <li>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1).replace('-', ' ')}</li>
                    </ul>
                  )
                );
              })}
          </CardMoves>
          <PokeType>
            {allTypes.length === 1 ?
              <TypesDiv>
                <TypeContainer color={color}>
                  {(color === 'grass') ? <TypeImage src={TypeGrass} /> : null}
                  {(color === 'water') ? <TypeImage src={TypeWater} /> : null}
                  {(color === 'fire') ? <TypeImage src={TypeFire} /> : null}
                  {(color === 'normal') ? <TypeImage src={TypeNormal} /> : null}
                  {(color === 'bug') ? <TypeImage src={TypeBug} /> : null}
                  {(color === 'poison') ? <TypeImage src={TypePoison} /> : null}
                  {(color === 'flying') ? <TypeImage src={TypeFlying} /> : null}
                  {(color === 'dark') ? <TypeImage src={TypeDark} /> : null}
                  {(color === 'dragon') ? <TypeImage src={TypeDragon} /> : null}
                  {(color === 'electric') ? <TypeImage src={TypeElectric} /> : null}
                  {(color === 'fairy') ? <TypeImage src={TypeFairy} /> : null}
                  {(color === 'fighting') ? <TypeImage src={TypeFighting} /> : null}
                  {(color === 'ghost') ? <TypeImage src={TypeGhost} /> : null}
                  {(color === 'ground') ? <TypeImage src={TypeGround} /> : null}
                  {(color === 'ice') ? <TypeImage src={TypeIce} /> : null}
                  {(color === 'psychic') ? <TypeImage src={TypePsychic} /> : null}
                  {(color === 'rock') ? <TypeImage src={TypeRock} /> : null}
                  {(color === 'steel') ? <TypeImage src={TypeSteel} /> : null}
                  <TypeText>{type.toUpperCase()}</TypeText>
                </TypeContainer>
              </TypesDiv>
              :
              <TypesDiv>
                <TypeContainer color={color}>
                  {(color === 'grass') ? <TypeImage src={TypeGrass} /> : null}
                  {(color === 'water') ? <TypeImage src={TypeWater} /> : null}
                  {(color === 'fire') ? <TypeImage src={TypeFire} /> : null}
                  {(color === 'normal') ? <TypeImage src={TypeNormal} /> : null}
                  {(color === 'bug') ? <TypeImage src={TypeBug} /> : null}
                  {(color === 'poison') ? <TypeImage src={TypePoison} /> : null}
                  {(color === 'flying') ? <TypeImage src={TypeFlying} /> : null}
                  {(color === 'dark') ? <TypeImage src={TypeDark} /> : null}
                  {(color === 'dragon') ? <TypeImage src={TypeDragon} /> : null}
                  {(color === 'electric') ? <TypeImage src={TypeElectric} /> : null}
                  {(color === 'fairy') ? <TypeImage src={TypeFairy} /> : null}
                  {(color === 'fighting') ? <TypeImage src={TypeFighting} /> : null}
                  {(color === 'ghost') ? <TypeImage src={TypeGhost} /> : null}
                  {(color === 'ground') ? <TypeImage src={TypeGround} /> : null}
                  {(color === 'ice') ? <TypeImage src={TypeIce} /> : null}
                  {(color === 'psychic') ? <TypeImage src={TypePsychic} /> : null}
                  {(color === 'rock') ? <TypeImage src={TypeRock} /> : null}
                  {(color === 'steel') ? <TypeImage src={TypeSteel} /> : null}
                  <TypeText>{type.toUpperCase()}</TypeText>
                </TypeContainer>
                <TypeContainer color={color2}>
                  {(color2 === 'grass') ? <TypeImage src={TypeGrass} /> : null}
                  {(color2 === 'water') ? <TypeImage src={TypeWater} /> : null}
                  {(color2 === 'fire') ? <TypeImage src={TypeFire} /> : null}
                  {(color2 === 'normal') ? <TypeImage src={TypeNormal} /> : null}
                  {(color2 === 'bug') ? <TypeImage src={TypeBug} /> : null}
                  {(color2 === 'poison') ? <TypeImage src={TypePoison} /> : null}
                  {(color2 === 'flying') ? <TypeImage src={TypeFlying} /> : null}
                  {(color2 === 'dark') ? <TypeImage src={TypeDark} /> : null}
                  {(color2 === 'dragon') ? <TypeImage src={TypeDragon} /> : null}
                  {(color2 === 'electric') ? <TypeImage src={TypeElectric} /> : null}
                  {(color2 === 'fairy') ? <TypeImage src={TypeFairy} /> : null}
                  {(color2 === 'fighting') ? <TypeImage src={TypeFighting} /> : null}
                  {(color2 === 'ghost') ? <TypeImage src={TypeGhost} /> : null}
                  {(color2 === 'ground') ? <TypeImage src={TypeGround} /> : null}
                  {(color2 === 'ice') ? <TypeImage src={TypeIce} /> : null}
                  {(color2 === 'psychic') ? <TypeImage src={TypePsychic} /> : null}
                  {(color2 === 'rock') ? <TypeImage src={TypeRock} /> : null}
                  {(color2 === 'steel') ? <TypeImage src={TypeSteel} /> : null}
                  <TypeText>{type2.toUpperCase()}</TypeText>
                </TypeContainer>
              </TypesDiv>
            }
          </PokeType>
        </CardDetalhe>
      </Main2>
    </Main>
  );
}
