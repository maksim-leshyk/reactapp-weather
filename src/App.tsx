import React from "react";
import { useSelector } from "react-redux";
import { Container, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { getVisuallyImpaired } from "./redux/selectors/app-selectors";
import WeatherContainer from "./components/Weather/WeatherContainer";
import Header from "./components/Header/Header";

import "./assets/styles/global.scss";

enum FontSize {
  SMALL = 14,
  LARGE = 20,
}

const App: React.FC = () => {
  const isVisuallyImpaired: boolean = useSelector(getVisuallyImpaired);
  const theme = createMuiTheme({
    typography: {
      fontSize: isVisuallyImpaired ? FontSize.LARGE : FontSize.SMALL,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className="app-content" maxWidth="md">
        <WeatherContainer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
