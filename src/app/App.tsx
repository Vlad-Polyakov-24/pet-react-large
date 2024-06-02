import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from 'app/providers/AppRouter';
import { getUserMounted, userActions } from 'entities/User';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
	const dispatch = useDispatch();
	const userMounted = useSelector(getUserMounted);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className='app'>
			<Header/>
			<div className='page'>
				<Sidebar/>
				<main className='main'>
					{userMounted && <AppRouter/>}
				</main>
			</div>
		</div>
	);
};

export default App;
