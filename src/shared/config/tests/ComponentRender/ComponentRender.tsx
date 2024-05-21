import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export type ComponentRenderOptions = {
	route?: string;
	initialState?: Partial<StateSchema>;
};

const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
	const {
		route = '/',
		initialState,
	} = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider initialState={initialState}>
				<I18nextProvider i18n={i18nForTests}>
					{component}
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>,
	);
};

export default ComponentRender;