import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './Button';

describe('Button', () => {
	test('Button in document', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('Button with class btn--outline', () => {
		render(<Button theme={ButtonTheme.OUTLINE}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('btn--outline');
	});
});