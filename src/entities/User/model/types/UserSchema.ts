export type User = {
	id: string;
	username: string;
};

export type UserSchema = {
	authData?: User;
	_mounted?: boolean;
};