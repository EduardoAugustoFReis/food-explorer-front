import styled from "styled-components";


export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;

  
  @media (min-width: 501px){
    max-width: 100%;

    display: grid;
    grid-template-rows: 100px auto auto 70px;
    grid-template-areas: 
    "header"
    "image"
    "content"
    "footer";
  }
  
  
`;

export const Brand = styled.div`
  grid-area: image;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.0rem;
  padding: 1.0rem 1.0rem;
  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};

  img{
    height: 10.0rem;
    width: 20.0rem;
  }

  div{
    display: flex;
    flex-direction: column;
    
    >h2, p{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    text-align: center;
    }

    >h2{
      font-size: 1.8rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      padding-bottom: 5px;
    }

    p{
      font-size: 1.4rem;
      font-family: "Roboto", sans-serif;
      padding-bottom: 1.0rem;
    }
  }
  
  @media (min-width: 501px){
    display: flex;
    flex-direction: row;
    padding-top: 4.0rem;

    gap: 4.0rem;

    img{
      height: 25.0rem;
      width: 25.0rem;
    }

    div{

      >h2{
        font-size: 2.8rem;
        text-align: left;
      }
      >p{
        font-size: 1.8rem;
        text-align: left;
      }
    }

  }
  
`; 

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  
  background-color: ${ ({theme}) =>theme.COLORS.DARK_400};
 
  
  >main{
    grid-area: content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }

  p{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 1.8rem;
    padding: 1.0rem 0px;
  }

  .carousel-size-card {
    display: flex;
    overflow-x: hidden; 
    max-width: 25.0rem;
  }

  .carousel {
    display: flex;
  }

  .meal-item {
    flex: 0 0 auto; 
    margin-right: 1rem; 
  }

  .button-carousel-layout{
    display: flex;
    justify-content: center;
    gap: 3.0rem;
  } 
  .button-carousel{
    background: none;
    border: none;
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    font-size: 2.2rem;
  }

  @media (min-width: 501px){
    
    p{
    color: ${ ({theme}) =>theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 2.2rem;
  }  

  .carousel-size-card {
    display: flex;
    overflow-x: hidden; 
    max-width: 50.0rem;
  }

  .carousel {
    display: flex;
  }

  .meal-item {
    flex: 0 0 auto; 
    margin-right: 1rem; 
  }
  
  }
  
`;

export const CarouselInner = styled.div`
  display: flex;
  width: ${props => `${props.width}%`};
  transform: ${props => `translateX(-${props.position * (100 / props.items)}%)`};
  transition: transform 0.5s ease;
`;

