import { render } from 'react-dom';

// providers
import { GlobalProvider } from './providers/global';
import { ThemeProvider } from './providers/theme';

// app
import App from './App';

render(
	<GlobalProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</GlobalProvider>,
	document.getElementById("root")
);