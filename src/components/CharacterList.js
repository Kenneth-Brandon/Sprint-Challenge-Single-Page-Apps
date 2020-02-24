import React, { useEffect, useState } from "react";
import axios from "axios";

import Character from "./CharacterCard";
import SearchForm from "./SearchForm";

import styled from "styled-components";

const Container = styled.div`
  background-color: #ffefd5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

function CharacterList() {
  const [page, setPage] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => {
        const results = response.data.results.filter(element =>
          element.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, [searchTerm, page]);

  return (
    <Container className="character-list">
      <h2>Characters</h2>
      <div>
        <button onClick={() => setPage(1)} onChange={handleChange}>
          1
        </button>
        <button onClick={() => setPage(2)} onChange={handleChange}>
          2
        </button>
        <button onClick={() => setPage(3)} onChange={handleChange}>
          3
        </button>
        <button onClick={() => setPage(4)} onChange={handleChange}>
          4
        </button>
        <button onClick={() => setPage(5)} onChange={handleChange}>
          5
        </button>
        <button onClick={() => setPage(6)} onChange={handleChange}>
          6
        </button>
        <button onClick={() => setPage(7)} onChange={handleChange}>
          7
        </button>
        <button onClick={() => setPage(8)} onChange={handleChange}>
          8
        </button>
        <button onClick={() => setPage(9)} onChange={handleChange}>
          9
        </button>
        <button onClick={() => setPage(10)} onChange={handleChange}>
          10
        </button>
        <button onClick={() => setPage(11)} onChange={handleChange}>
          11
        </button>
        <button onClick={() => setPage(12)} onChange={handleChange}>
          12
        </button>
        <button onClick={() => setPage(13)} onChange={handleChange}>
          13
        </button>
        <button onClick={() => setPage(14)} onChange={handleChange}>
          14
        </button>
        <button onClick={() => setPage(15)} onChange={handleChange}>
          15
        </button>
        <button onClick={() => setPage(16)} onChange={handleChange}>
          16
        </button>
        <button onClick={() => setPage(17)} onChange={handleChange}>
          17
        </button>
        <button onClick={() => setPage(18)} onChange={handleChange}>
          18
        </button>
        <button onClick={() => setPage(19)} onChange={handleChange}>
          19
        </button>
        <button onClick={() => setPage(20)} onChange={handleChange}>
          20
        </button>
        <button onClick={() => setPage(21)} onChange={handleChange}>
          21
        </button>
        <button onClick={() => setPage(22)} onChange={handleChange}>
          22
        </button>
        <button onClick={() => setPage(23)} onChange={handleChange}>
          23
        </button>
        <button onClick={() => setPage(24)} onChange={handleChange}>
          24
        </button>
        <button onClick={() => setPage(25)} onChange={handleChange}>
          25
        </button>
      </div>

      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      {searchResults.map((data, index) => (
        <Character
          key={index}
          name={data.name}
          image={data.image}
          species={data.species}
          status={data.staus}
        />
      ))}
    </Container>
  );
}

export default CharacterList;
