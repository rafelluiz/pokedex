import styled from "styled-components"

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  
`;

export const ListPokemon = styled.div`
  margin-top: 15px;
  max-width: 180px;
  
  
  
  a {
    background: #fff;
    border-radius: 15px;
    width: 100%;
    padding: 24px;
    display: inline-block;
    text-decoration: none;
    
    
    align-items: center;
    transition: transform 0.2s;
    
    &:hover {
      transform: translateX(10px);
    } 
    
    & + a {
    margin-top: 16px;
    }
  
    img {
      width: 80%;
      height: 80%;
      display: inline-block;
    }
    
    strong {
      
      font-size: 20px;
      color: #3D3D4D;
    }
  }
`;

