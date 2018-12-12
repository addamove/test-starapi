import React from "react";

import Routes from "./router";
import Appbar from "./components/Appbar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import GridLayout from "./components/GridLayout";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#5f9fdd" }, // Purple and green play nicely together.
    secondary: { main: "#d7c078" } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Appbar />
      <GridLayout>
        <Routes />
      </GridLayout>
    </MuiThemeProvider>
  );
};

export default App;
