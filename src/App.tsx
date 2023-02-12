import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";
import Global from "./assets/styles/Global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      Planets Fact
    </ThemeProvider>
  )
}

export default App;
