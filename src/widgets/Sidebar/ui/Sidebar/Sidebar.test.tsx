import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import renderWithTranslation from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
	test('Sidebar in document', () => {
		renderWithTranslation(<Sidebar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Sidebar toggle', () => {
		renderWithTranslation(<Sidebar/>);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});