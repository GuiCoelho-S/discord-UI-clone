import styled from "styled-components";

export const HomeContent = styled.article`

  width:100%;
  height:auto;
  
  display:flex;
  flex-direction: column;

  header {
    position: relative;
    height: 100px;
    width:80%;
    display:flex;
    justify-content: flex-start;
    border:1px solid red;
    border: 1px solid transparent;
    border-bottom: 1px solid grey;
    padding:20px 0 12px 0;

    h2 {
      font-size:1.3rem;
    }
    svg {
      width:30px;
      height: 30px;
    }
  }
  ul {
    height:calc(100vh - 170px); // 100px - header + 70px - footer
    overflow-y: scroll;
    padding:30px 20px 10px 10px;

    display:flex;
    flex-direction: column;
    
    :--webkit-scrollbar {
      display:none;
    }
    scrollbar-width: none;
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

export const CloseDropDown = styled.button`
position:absolute;
top:20px;
right:0px;

padding:4px;
background-color: transparent;
border: 1px solid transparent;
border-radius: 8px;

display:grid;
place-items:center;

svg {
  width:10px;
  height: 10px;
  fill: #444;
}

  :focus {
  outline: 4px solid var(--brand);
}
`
