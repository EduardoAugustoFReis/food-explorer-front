import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto 70px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
 
  @media (min-width: 501px){
    max-width: 100%;
  }


`;
export const Main = styled.div`
  padding: 20px;

  background-color: ${ ({theme}) => theme.COLORS.DARK_400};

  h1{
    color: ${ ({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2.8rem;
    padding-top: 1.0rem;
    padding-bottom: 1.0rem;
  }

  .buttons-update{
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding-bottom: 1.0rem;
  }

  @media (min-width: 501px){
    
    padding: 10px 8.0rem;

    .tag-ingredients{
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }

    >h1{
      font-size: 3.0rem;
      text-align: center;
    }
   
  }

`;

export const Buttons = styled.button`
  width: 100%;

  background: none;
  border: none;
  border: 1px solid;
  border-radius: 1.0rem;

  color: ${ ({theme}) => theme.COLORS.LIGHT_100};
  font-size: 2.2rem;

`
