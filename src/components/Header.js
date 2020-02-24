import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: "Bangers", cursive;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-bottom: 2%;
`;

function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavBar>
        <StyledLink to="/">Welcome</StyledLink>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/locations">Locations</StyledLink>
        <StyledLink to="/episodes">Episodes</StyledLink>
      </NavBar>
    </header>
  );
}

export default Header;
