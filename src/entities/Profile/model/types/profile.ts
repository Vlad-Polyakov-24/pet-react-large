import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileErrors {
	NO_DATA = 'NO_DATA',
	SERVER_ERROR = 'SERVER_ERROR',
	INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
	INCORRECT_LASTNAME = 'INCORRECT_LASTNAME',
	INCORRECT_AGE = 'INCORRECT_AGE',
	INCORRECT_CITY = 'INCORRECT_CITY',
	INCORRECT_USERNAME = 'INCORRECT_USERNAME',
}

export type Profile = {
	firstname?: string;
	lastname?: string;
	age?: number,
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
};

export type ProfileSchema = {
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	validateErrors?: ValidateProfileErrors[];
};