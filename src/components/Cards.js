import React from "react";
import styled from "styled-components";
import ActionAreaCard from "./ActionAreaCard.js";
const Container = styled.div`
width:100vw;
margin:20px 0px;
`
const Wrapper = styled.div`
display:flex;

`
const Cards = () => {


  return (
    <Container>
      <Wrapper>
      <ActionAreaCard content="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" 
      />
      <ActionAreaCard content="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" 
      />
      <ActionAreaCard content="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" 
      />
      <ActionAreaCard content="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" 
      />
      </Wrapper>
      
    </Container>
  );
};

export default Cards;
