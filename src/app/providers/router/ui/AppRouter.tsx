import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'features/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = memo(() => {
	const isAuth = useSelector(getUserAuthData);

	const routes = useMemo(() => Object.values(routeConfig).filter(route => !(route.authOnly && !isAuth)), [isAuth]);

	return (
		<Routes>
			{routes.map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={(
						<main className='main'>
							<Suspense fallback={<PageLoader/>}>
								{element}
							</Suspense>
						</main>
					)}
				/>
			))};
		</Routes>
	);
});

export default AppRouter;
