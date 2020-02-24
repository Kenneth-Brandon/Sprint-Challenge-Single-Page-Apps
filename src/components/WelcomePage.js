import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffefd5;
  padding: 2% auto;
  font-size: 2rem;
  font-style: italic;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Div>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <span>
            Morty: Nobody exists on purpose. Nobody belongs anywhere. We're all
            going to die. Come watch TV.
          </span>
        </Div>
      </header>
    </section>
  );
}
