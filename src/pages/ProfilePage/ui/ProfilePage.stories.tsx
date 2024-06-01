import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const meta = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				isLoading: false,
				readonly: true,
				form: {
					firstname: 'firstname',
					lastname: 'lastname',
					age: 22,
					currency: Currency.UAH,
					country: Country.Ukraine,
					city: 'Kharkiv',
					username: 'admin',
				},
			},
		}),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			profile: {
				isLoading: false,
				readonly: true,
				form: {
					firstname: 'firstname',
					lastname: 'lastname',
					age: 22,
					currency: Currency.UAH,
					country: Country.Ukraine,
					city: 'Kharkiv',
					username: 'admin',
				},
			},
		}),
	],
};