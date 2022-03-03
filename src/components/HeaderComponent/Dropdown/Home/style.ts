import Link from "next/link";
import styled from "styled-components";

export const HomeContent = styled.article`

  width:100%;
  height:100%;
  
  display:flex;
  flex-direction: column;

  header {
    display:flex;
    justify-content: flex-start;
    border:1px solid red;
    padding-left: 20px;
    position: relative;

    h2 {
      font-size:1.3rem;
    }
    svg {
      width:30px;
      height: 30px;
    }
  }
  ul {
    height:100%;
    overflow-y: scroll;
    padding:10px 20px 10px 10px;

    display:flex;
    flex-direction: column;
  }
  
`;

export const LinkStyled = styled.a`
  
    font-size:1rem;
    width:100%;
    padding:10px;
    border-radius: 8px;
    border: 1px solid transparent;
    text-decoration: none;
    color: #333;

    display: flex;
    gap:10px;

    svg {
      width: 20px;
      height: 20px;
    }
  :hover {
    background-color: rgba(0,0,0,.05);

      color: var(--brand);
      text-decoration: underline;
    }
  :focus {
    outline: 4px solid var(--brand)
  }
`