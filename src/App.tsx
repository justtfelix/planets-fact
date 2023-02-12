import React from "react";
import { ThemeProvider } from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { defaultTheme } from "./theme/defaultTheme";
import Global from "./assets/styles/Global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <Global />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=League+Spartan:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
