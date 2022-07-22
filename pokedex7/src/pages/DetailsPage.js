import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../components/global/GlobalContext";
import axios from 'axios'

const Main = styled.div`
color: black;
`;

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
  background-color: #729F92;
  border-radius: 12px; 
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
background-color: white;
border-radius: 8px;
h2 {
  padding: 10px 0 0 40px
}
progress {
  padding: 10px 0 0 40px
}
`;

const CardMoves = styled.div`
width: 292px;
height: 453px;
margin: 183px 25px 24px 68px;
background-color: white;
border-radius: 8px;
h2 {
  display: flex;
  padding: 10px 0 0 40px;
}
li {
  display: flex;
  margin-right: 90px;
  gap: 7px;
  border-style: dashed;
  border-color: #ECECEC;
  padding: 10px 0 0 20px;
  background-color: #ECECEC;
  border-radius: 8px;
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



export default function DetailsPage() {
  const { details } = useContext(GlobalContext)




  console.log(details)
  return (
    <Main>
      <h2>Detalhes</h2>
      <Main2>
        <CardDetalhe>
          <NamePoke>
          <h2>{details.name}</h2>
          </NamePoke>
          <IdPoke>
          <h2>#{details.id}</h2>
          </IdPoke>
            <CardFotos>
              <FotoPoke>
                <img src={details.image}></img>
              </FotoPoke>
            <FotoFrente>
            <img src={details.imageFront}></img>
            </FotoFrente>
            <FotoTras>
              <img src={details.imageBack}></img>
            </FotoTras>
          </CardFotos>
          <Status>
            <h2>Base Stats</h2>
            {details &&
              details.stats.map((stat) => {
                return (
                  <div>
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </p>
                  <progress value={stat.base_stat} max={100}/>
                  </div>
                );
              })}
          </Status>
          <CardMoves>
            <h2>Moves</h2>
            {details &&
              details.moves.map((move, index) => {
                return (
                  index < 5 && (
                    <p key={move.move.name}>
                      <ul>
                        <li>{move.move.name}</li>
                      </ul>
                    </p>
                  )
                );
              })}
          </CardMoves>
        </CardDetalhe>
      </Main2>
    </Main>
  );
}
