import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.3);
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, *::before, *:after {
    -webkit-tap-highlight-color: transparent;
}

html {
    font-family: 'Jost', sans-serif;
    font-style: normal;
    line-height: normal;
}

body {
    min-height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    background-color: #F7F8FD;
    overflow-x: hidden;
}

h1 {
    color: #3A4374;
    font-size: 24px;
    font-weight: 700;
    
    letter-spacing: -0.333px;
}

h2 {
    color: #3A4374;
    font-size: 20px;
    font-weight: 700;
    
    letter-spacing: -0.25px;
}


h3 {
    color: #3A4374;
    font-size: 18px;
    font-weight: 700;
    
    letter-spacing: -0.25px;
}

h4 {
    color: #3A4374;
    font-size: 14px;
    font-weight: 700;
    
    letter-spacing: -0.194px;
}

h5 {
    color: #3A4374;
    font-size: 16px;
    font-weight: 400;
    
}

h6 {
    color: #3A4374;
    font-size: 15px;
    font-weight: 400;
    
}

p {
    color: #3A4374;
    font-size: 13px;
    font-weight: 600;
    
}

input,
fieldset,
button,
textarea {
    border: unset;
    outline: unset;
}

input, textarea {
    width: 255px;
    height: 48px;
    border-radius: 5px;
    background-color: #F7F8FD;
    border: 1px solid transparent;
    padding: 13px 0 13px 24px;

    color: #3A4374;
    font-size: 15px;
    font-weight: 400;


    transition: .5s ease border;

    &:focus-visible {
        border-color: #4661E6;
    }

    
    &.error {
        border-color: #D73737;
    }
}

button {
    width: 158px;
    height: 44px;
    border-radius: 10px;

    display: grid;
    place-items: center;

    color: #F2F4FE;
    font-size: 14px;
    font-weight: 700;

    &:focus-visible {
        outline: 1px dashed black;
        outline-offset: 2px;
    }
}

svg, button {
    cursor: pointer;
}



`;

export { GlobalStyle };
