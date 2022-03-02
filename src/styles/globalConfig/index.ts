import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

  body {
  width:100%;
  height:100%;
  min-height: 100vh ;
  background: #333;
}

/* fonts

roboto -> 100,300,500,900
*/ 

:root {
  --brand: #5865f2;
  --brand-gradient: linear-gradient(90deg,#8ea1e1,#7289da);
  --greyple: #99aab5;
  --dark-not-black: #2c2f33;
  --focus-border: #00b0f4;
  --status-green: #43b581;
  --text-link: #00b0f4;
  --off-white: #f6f6f6;
  --white: #fff;
  --not-quite-black: #23272a;
  --not-quite-black-rgb: 35,39,42;
  --black: #000;
  --ekko-red: #de2761;

  --max-page-width: 1260px;
}
`