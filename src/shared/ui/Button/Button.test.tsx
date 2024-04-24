import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('Button', () => {
	test('Button in document', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('Button with class btn--default', () => {
		render(<Button theme={ThemeButton.DEFAULT}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('btn--default');
	});
});