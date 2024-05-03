import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className='app'>
			<Header/>
			<div className='page'>
				<Sidebar/>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;
