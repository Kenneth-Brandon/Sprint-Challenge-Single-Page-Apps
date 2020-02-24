import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 5px solid #000;
  text-align: center;
  background-color: #ffefd5;
`;

function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location`)
      .then(response => {
        setLocation(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);
  console.log(location);

  return (
    <Container>
      <LocationCard location={location} />
    </Container>
  );
}

export default LocationsList;
