import styled from "styled-components";

export const Container = styled.div`
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