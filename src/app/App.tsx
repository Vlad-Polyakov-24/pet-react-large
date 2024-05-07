import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AppRouter } from 'app/providers/router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

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
