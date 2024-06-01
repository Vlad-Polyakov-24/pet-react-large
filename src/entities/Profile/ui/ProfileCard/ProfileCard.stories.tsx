import type { Meta, StoryObj } from '@storybook/react';
import ProfileCard from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/images/avatar_stories.jpg';

const meta = {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: {
			firstname: 'firstname',
			lastname: 'lastname',
			age: 22,
			currency: Currency.UAH,
			country: Country.Ukraine,
			city: 'Kharkiv',
			username: 'admin',
			avatar: AvatarImg,
		},
	},
};

export const WithError: Story = {
	args: {
		error: 'true',
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};


