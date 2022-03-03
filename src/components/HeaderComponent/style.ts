import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 100vw;
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
    position: relative;
  }
  
  .dropdown-enter {
    transform: translateX(100%);
    position: absolute;
  }
  .dropdown-enter-active {
    transform: translateX(0);
    transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .dropdown-exit {
    transform: translateX(0);
  }
  .dropdown-exit-active {
    transform: translateX(100%);
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