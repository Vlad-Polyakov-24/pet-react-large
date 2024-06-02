import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type AppRouterProps, routeConfig } from '../config/routeConfig/routeConfig';
import RequireAuth from './RequireAuth';
import { PageLoader } from 'features/PageLoader';

const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRouterProps) => {
		const element = (
			<Suspense fallback={<PageLoader/>}>
				{route.element}
			</Suspense>
		);

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		);
	}, []);

	return (
		<Routes>
			{Object.values(routeConfig).map(renderWithWrapper)}
		</Routes>
	);
});

export default AppRouter;
