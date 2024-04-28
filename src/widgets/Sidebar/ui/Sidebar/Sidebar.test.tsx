import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import ComponentRender from 'shared/config/tests/ComponentRender/ComponentRender';

describe('Sidebar', () => {
	test('Sidebar in document', () => {
		ComponentRender(<Sidebar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Sidebar toggle', () => {
		ComponentRender(<Sidebar/>);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});