import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import App from './app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
);