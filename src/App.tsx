import React, { useState } from "react";
import { Global } from "./Style/GlobalStyled.style";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Style/Theme/Light/LightTheme";
import { DarkTheme } from "./Style/Theme/Dark/DarkTheme";
import Sidebar from "./Components/Sidebar/Sidebar";
import { HashRouter } from "react-router-dom";
const App: React.FC = () => {
  const [Theme, setTheme] = useState(LightTheme);

  const ToggleTheme = () => {
    setTheme(Theme.title === "light" ? DarkTheme : LightTheme);
  };
  return (
    <div>
      <HashRouter>
        <ThemeProvider theme={Theme}>
          <Global />
          <h1>hai From react</h1>
          <Sidebar ToggleTheme={ToggleTheme} />
        </ThemeProvider>
      </HashRouter>
    </div>
  );
};

export default App;

const Div = styled.div`
  display: flex;
  height: 50px;
  width: 60px;
  justify-content: center;
  align-items: center;

  &:hover svg {
    color: white;
    transition: 0.7s ease all;
  }
`;
