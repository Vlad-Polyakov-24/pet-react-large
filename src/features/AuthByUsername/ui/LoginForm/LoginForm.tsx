import styles from './LoginForm.module.scss';
import { type FormEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { useTranslation } from 'react-i18next';
import getLoginUsername from '../../model/selectors/getLoginUsername/getLoginUsername';
import getLoginIsLoading from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import getLoginError from '../../model/selectors/getLoginError/getLoginError';
import getLoginPassword from '../../model/selectors/getLoginPassword/getLoginPassword';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import loginByUsername from '../../model/sevices/loginByUsername/loginByUsername';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { type Dispatch } from '@reduxjs/toolkit';

type LoginFormProps = {
	className?: string;
	onSuccess?: () => void;
};

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch: Dispatch<any> = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const error = useSelector(getLoginError);
	const isLoading = useSelector(getLoginIsLoading);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onSubmit = useCallback(async (e: FormEvent) => {
		e.preventDefault();
		// eslint-disable-next-line
		const result: any = await dispatch(loginByUsername({ username, password }));

		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess?.();
		}

	}, [dispatch, password, username, onSuccess]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<form className={classNames(styles.form, {}, [className])} onSubmit={onSubmit}>
				<Text title={t('authorization form')}/>
				{error && <Text theme={TextTheme.ERROR} description={t('invalid login or password entered')}/>}
				<Input
					label={t('enter your name')}
					id='user_name'
					name='user_name'
					placeholder={t('your name')}
					autoFocus
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					label={t('enter your password')}
					type='password'
					id='user_pass'
					name='user_pass'
					placeholder={t('password')}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					type='submit'
					theme={ButtonTheme.OUTLINE}
					className='ml-a'
					disabled={isLoading}
				>
					{t('login')}
				</Button>
			</form>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
