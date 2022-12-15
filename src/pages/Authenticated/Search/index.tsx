import React, { useState } from "react";

import { Container } from "./../../../global-styles";

import { useParams } from "react-router-dom";

const Search: React.FC = () => {
  let { query } = useParams();

  return (
    <>
      <Container>
        <h1>Pesquisa</h1>
        <p>{query}</p>
      </Container>
    </>
  );
};

export default Search;
