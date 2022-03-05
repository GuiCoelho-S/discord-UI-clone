import styled from "styled-components";

export const DropDownContainer = styled.section`

  position: absolute;
  top:0;
  right:0;
  max-width:320px;
  width:100%;
  height:100vh;

  z-index:2;
  background-color: inherit;

  display:flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width:1030px){
    display: none;
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
    transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .dropdown-exit-active {
    transform: translateX(100%);
  }
`


export const DropdownHeader = styled.header`

position: relative;
height: 100px;
width:80%;
display:flex;
justify-content: flex-start;
border:1px solid red;
border: 1px solid transparent;
border-bottom: 1px solid grey;
padding:20px 0 12px 0;


  button: last-child {
    background-color: inherit;
    border-radius: 50%;
    border: 2px solid transparent;
    position:absolute;
    top:10px;
    right:10px;

    width:40px;
    height:40px;
    
    display:grid;
    place-items: center;
    
    svg {
      width: 20px;
      height: 20px;
      fill: #333;
    }
    :hover {
      background-color:rgba(0,0,0,.2);
    }
  }
  :focus {

  button {
    border-color: #333;
    outline:none;
  }
}
`;

export const BackToMain = styled.button`

border-radius:8px;
padding: 8px;
background-color: white;
border:1px solid transparent;
display: flex;
align-items:center;
gap: 10px;

cursor: pointer;

svg {
  width:20px;
  height: 20px;
}

p {
  font-size: 1rem;
}
`;

export const DropdownUl = styled.ul`

height:calc(100vh - 170px); /*100px - header + 70px - footer */
overflow-y: scroll;
padding:30px 30px 10px 30px;

display:flex;
flex-direction: column;
    
:--webkit-scrollbar {
    display:none;
  }

scrollbar-width: none;  
`;

export const ItemLink = styled.a`
  
    width:100%;
    padding:10px;
    border-radius: 8px;
    border: 1px solid transparent;
    text-decoration:none;
    gap:10px;
    
    span {
      font-size: 1rem;
      color:#333;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  :hover {
    background-color: rgba(0,0,0,.05);

      span {
        color: var(--brand);
        text-decoration: underline;
      }
    }
  :focus {
    outline: 4px solid var(--brand)
  }
`
export const ChangeMode = styled.button`
    
    cursor:pointer;
    background-color: inherit;
    width:100%;
    padding:10px;
    border-radius: 8px;
    border: 1px solid transparent;

    display: flex;
    gap:10px;
    
    span {
      font-size: 1rem;
      text-decoration:none;
      color:#333;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  :hover {
    background-color: rgba(0,0,0,.05);

    svg {
        fill: var(--brand);
      }
    span {
      color: var(--brand);
      text-decoration: underline;
    }
  }
  :focus {
    outline: 4px solid var(--brand)
  }
`;
export const SubTitle = styled.h3`

font-size:1rem;
color: #000;
padding: 10px 0;
font-family: 'Roboto', Arial
`;

export const DropdownFooter = styled.footer`
width: 100%;
height: 100px;
display: grid;
place-items: center;

button {
  width:80%;
  height: auto;
  padding: 5px 20px;

  p {
    font-size:0.9rem;
    font-style: bold;
  }
  svg {
    width:25px;
    height:25px;
  }
}
`
