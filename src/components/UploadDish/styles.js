import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.0rem;
  margin-bottom: 0.8rem;
  background-color: ${ ({theme}) =>theme.COLORS.DARK_800};

  border-radius: 1.0rem;
  
  >label{
    display: flex;
    align-items: center;
    gap: 2.0rem;
    cursor: pointer;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    padding: 1.2rem;
    
    >input{
     
    }

    >svg{
      font-size: 2.2rem;
    }
  }

`;