import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Game from "./components/Game";
import { createTheme } from "@mui/material/styles";
import Home from "./components/Home";
import "./App.css";
const theme = createTheme();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
