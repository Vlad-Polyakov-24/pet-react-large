import { type Profile, ValidateProfileErrors } from '../../types/profile';

const validateProfileData = (profile?: Profile) => {
	if (!profile) return [ValidateProfileErrors.NO_DATA];
	const {
		firstname,
		lastname,
		age,
		city,
		username,
	} = profile;
	const errors: ValidateProfileErrors[] = [];

	if (!firstname) {
		errors.push(ValidateProfileErrors.INCORRECT_FIRSTNAME);
	}

	if (!lastname) {
		errors.push(ValidateProfileErrors.INCORRECT_LASTNAME);
	}

	if (!age || !Number.isInteger(age) || age < 1) {
		errors.push(ValidateProfileErrors.INCORRECT_AGE);
	}

	if (!city) {
		errors.push(ValidateProfileErrors.INCORRECT_CITY);
	}

	if (!username) {
		errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
	}

	return errors;
};

export default validateProfileData;