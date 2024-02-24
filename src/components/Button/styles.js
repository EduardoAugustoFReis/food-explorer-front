import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: ${ ({theme}) =>theme.COLORS.TOMATO_100};

  border: none;
  border-radius: 1.0rem;

  padding: 1.2rem;

  @media (min-width: 501px){
    font-size: 1.6rem;
  }

`;