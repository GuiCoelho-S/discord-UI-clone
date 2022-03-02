import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--brand);

  header {
    margin:0 auto;
    width:100%;
    max-width: var( --max-page-width);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
  }
` ;

export const NavList = styled.nav`
   
   ul {
     display: flex;
     justify-content: center;
     align-items: center;
     gap:20px;

     li {
        list-style: none;
        height:100%;

        a {
          text-decoration: none;
          color: white;
          font-size:1rem;
          font-weight:600;
          border: 4px solid transparent;
          
          padding: 10px;
          border-radius:8px;

          :hover {
            text-decoration: underline;
          }
          :focus {
            border-color: var(--focus-border);
            outline: none;
          }          
       }
     }
   }
`;

export const HomeButton = styled.button`
  background-color:inherit;
  height: 60px;
  display:flex;
  justify-content: start;
  align-items: center;
  gap:10px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid transparent;

  svg {
    width: 40px;
    height: 40px;
    fill: #fff;
  }
  h2 {
    font-weight: 900;
    color:#fff;
    font-size:1.2rem;
  }

  :focus {
    outline: 4px solid var(--focus-border);
  }
`;