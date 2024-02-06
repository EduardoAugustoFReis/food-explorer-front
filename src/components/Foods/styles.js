import styled from "styled-components";

export const Container = styled.div`
  width: 20.0rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.0rem;
  
  margin-bottom: 1.0rem;
  
  background-color: ${({theme}) =>theme.COLORS.DARK_600} ;
  border-radius: 1.0rem;

  a{
    cursor: pointer;
    img{
    width: 9.0rem;
  }
  }
  
  >h3{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    font-size: 20px;
  }
  >p{
    color: ${ ({theme}) =>theme.COLORS.CAKE_200};
    font-size: 18px;
  }

  >div{
    display: flex;
    align-items: center;
    gap: 8px;

    span{
      color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
      font-size: 16px;
    }

    button{
      background: none;
      border: none;
    }

    svg{
      color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
      font-size: 20px;
    }

  }
 
`;