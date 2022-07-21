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
`
const FotoFrente = styled.div`
width: 282px;
height: 282px;
margin-left: 44px;



background-color: white;
border: 1px solid black;
border-radius: 8px;
`;
const FotoTras = styled.div`
width: 282px;
height: 282px;
margin-top: 26px;
margin-left: 44px;
background-color: white;
border: 1px solid black;
border-radius: 8px;
`;
const Status = styled.div`
width: 343px;
height: 613px;
margin: 24px 0 24px 25px;
background-color: white;
border: 1px solid black;
border-radius: 8px;
`;
const CardMoves = styled.div`
width: 292px;
height: 453px;
margin: 183px 25px 24px 68px;
background-color: white;
border: 1px solid black;
border-radius: 8px;
`;



export default function DetailsPage() {
  const { details } = useContext(GlobalContext)




  console.log(details)
  return (
    <Main>
      <h2>Detalhes</h2>
      <Main2>
        <CardDetalhe>
          <CardFotos>
            <FotoFrente>
              <h2>{details.name}</h2>
              <h2>#{details.id}</h2>
              <img src={details.imgfront}></img>
            </FotoFrente>
            <FotoTras>
              <img src={details.imgback}></img>
            </FotoTras>
          </CardFotos>
          <Status>
            <h2>base stats</h2>
            {details &&
              details.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </p>
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
