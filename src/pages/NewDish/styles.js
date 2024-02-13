import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;

  
  @media (min-width: 501px){
    max-width: 100%;

    display: grid;
    grid-template-rows: auto auto 70px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
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

  @media (min-width: 501px){  
    grid-area: content;
    padding: 1.5rem 10.0rem;

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

export const Form = styled.form`
  padding: 20px;
`;

export const InputCategory = styled.div`
  
  select{
    width: 100%;
    height: 4.8rem;
    border: none;
    border-radius: 1.0rem;
    padding: 1.2rem;
    background-color: ${ ({theme}) =>theme.COLORS.DARK_900};
    color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
  }
`;

export const InputUpload = styled.div`
  width: 100%;
  height: 4.8rem;
  background-color: ${ ({theme}) =>theme.COLORS.DARK_900};
  padding: 1.2rem;
  border: none;
  border-radius: 1.0rem;
 

  label{
    font-size: 1.8rem;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 20px;

    >svg{
      font-size: 20px;
    }
  }

  input{
    display: none;
  }

`;