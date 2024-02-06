import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  

  background-color: ${ ({theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${ ({theme}) => theme.COLORS.LIGHT_100};
  border: ${ ({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 1.0rem;
  margin-bottom: 5px;

  >button{
    border: none;
    background: none;
  }

  .button-delete{
    color: ${ ({theme}) => theme.COLORS.LIGHT_100};  
    
    >svg{
      font-size: 2.0rem;
      margin-right: 5px;
    }
  }

  .button-add{
    color: ${ ({theme}) => theme.COLORS.LIGHT_500};  
    
    >svg{
      font-size: 2.0rem;
      margin-right: 5px;
    }
  }

  >input{
    height: 5.6rem;
    width: 100%;
    color: ${ ({theme}) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    padding: 1.2rem;
    background: transparent;
    border: none;
    outline: none;

    &::placeholder{
      color: ${ ({theme}) => theme.COLORS.LIGHT_500};  
    }
  }
  

`;