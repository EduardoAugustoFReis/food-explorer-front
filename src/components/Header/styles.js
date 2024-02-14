import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
`;

export const HeaderMobile = styled.div`
  width: 100%;
  height: 7.0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.0rem;

  background-color: ${ ({theme}) =>theme.COLORS.DARK_700};
  padding: 1.2rem;

  img{
    height: 3.0rem;
  }
`;

export const Menu = styled.button`
    background: none;
    border: none;
    padding-top: 5px;
    padding-right: 2.0rem;
    
    >svg{
      font-size: 2.6rem;
      color: ${ ({theme}) =>theme.COLORS.LIGHT_100};
    }

     
    @media (min-width: 768px){
      display: none;
    }
    
`;

export const HeaderDesktop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.0rem;
  padding: 2.0rem;
  background-color: ${ ({theme}) =>theme.COLORS.DARK_600};
`;

export const Logout = styled.button`
  background: none;
  border: none;

  >svg{
    color:  ${ ({theme}) =>theme.COLORS.LIGHT_100};
    font-size: 2.6rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  gap: 10px;

  img{
    height: 30px;
  }
`;

export const ButtonDish = styled.div`
  width: 30.0rem;
`;