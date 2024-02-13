import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_900};
  border-radius: 1.0rem;

  >input{
    height: 4.8rem;
    width: 100%;
    
    outline: none;
    
    padding: 1.2rem;
    border: 0;
    background: transparent;
    font-size: 1.6rem;
    
    color: ${ ({theme}) =>theme.COLORS.LIGHT_100};

    &:placeholder{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    }
  }


  >svg{
    margin-left: 1.6rem;
    color:  ${ ({theme}) =>theme.COLORS.LIGHT_100};
  }
`