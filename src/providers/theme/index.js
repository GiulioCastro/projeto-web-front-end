import React, { createContext, useContext, useMemo } from 'react';
import { responsiveFontSizes } from '@mui/material';
import { createTheme, ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import { useLocalStorage } from 'hooks';

import GlobalStyles from './GlobalStyles';
import typography from './typography';
import { light, dark } from './palettes';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode');

	const theme = useMemo(() => responsiveFontSizes(
		createTheme({
			palette: darkMode ? dark : light,
			typography
		})), [darkMode]);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<MaterialThemeProvider theme={theme}>
			<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
				<GlobalStyles />
				{children}
			</ThemeContext.Provider>
		</MaterialThemeProvider>
	);
};

function useThemeState() {
	return useContext(ThemeContext);
}

export { ThemeProvider, ThemeContext, useThemeState };