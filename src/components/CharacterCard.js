import React from "react";

import styled from "styled-components";

const Card = styled.div`
  width: 75%;
  background-color: #800020;
  padding: 2%;
  box-shadow: 50px 50px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 5%;
  display: flex;
  flex-flow: row wrap;
`;

const CardRight = styled.div`
  width: 25%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
`;

function CharacterCard(props) {
  console.log(props);
  return (
    <Card key={props.id}>
      <img src={props.image} />

      <CardRight>
        <h2>Name : {props.name}</h2>
        <h3>Species: {props.species}</h3>
        <h3>Status: {props.status}</h3>
      </CardRight>
    </Card>
  );
}

export default CharacterCard;
