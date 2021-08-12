import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import NewGamePage from "./pages/NewGame";
import GamePage from "./pages/Game";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    --color-primary: #2c3e50;
    --color-tertiary: #34495e;
    --color-secondary: #fff;
    --color-border: #e5e5e5;
    --color-text: rgb(11,9,31);
    --color-error: #FF0033;
    --min-tap-target-height: 4.8rem;

    --shadow-color:rgba(0, 0, 0, 0.1) 0px 4px 12px;

    @media (min-width: 1024px) {
      --min-tap-target-height: 4rem;
    }
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  label {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.1px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    min-height: 100vh;
  }

  button {
    border: none;
    background: var(---color-primary);
  }

  ul {
    list-style: none;
  }

`;

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={NewGamePage} />
        <Route exact path="/game/:id" component={GamePage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
