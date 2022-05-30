import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Root, theme } from "./Themes";
import Routes from "@Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster />
        <Root>
          <Routes />
        </Root>
      </ThemeProvider>
    </Router>
  );
}

export default App;
