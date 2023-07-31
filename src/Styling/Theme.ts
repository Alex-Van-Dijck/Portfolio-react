import { createTheme } from "@mui/material/styles";
import { indigo, grey } from "@mui/material/colors";
import { Theme } from "@mui/material/styles";

export const darkTheme: Theme = createTheme({
	typography: {
		fontFamily: [
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			"Oxygen",
			"Ubuntu",
			"Cantarell",
			'"Open Sans"',
			'"Helvetica Neue"',
			"sans-serif",
		].join(""),
	},
	palette: {
		primary: {
			main: "#15313c",
			dark: "#15313c",
			light: "#264653",
		},
		secondary: {
			main: "#237f72",
			light: "#2a9d8f",
			dark: "#237f72",
		},
		background: {
			default: "#000000",
			paper: "#000000",
		},
		text: {
			primary: "rgba(255, 255, 255, 1)",
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
		},
		mode: "dark",
	},
});

export const lightTheme = createTheme({
	typography: {
		fontFamily: [
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			"Oxygen",
			"Ubuntu",
			"Cantarell",
			'"Open Sans"',
			'"Helvetica Neue"',
			"sans-serif",
		].join(""),
	},
	palette: {
		primary: {
			main: "#264653",
			dark: "#15313c",
			light: "#4d7c8f",
		},
		secondary: {
			main: "#2a9d8f",
			light: "#5abbb2",
			dark: "#237f72",
		},
		background: {
			default: "#f5fffa",
		},
		divider: indigo[200],
		text: {
			primary: grey[900],
			secondary: grey[800],
		},
		mode: "light",
	},
});
