import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import "./App.css";
import RoutesComponent from "./Routes/RoutesComponent";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
