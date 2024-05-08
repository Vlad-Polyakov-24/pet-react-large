import styles from './LoginForm.module.scss';
import { type FormEvent, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type Dispatch } from '@reduxjs/toolkit';
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

type LoginFormProps = {
	className?: string;
};

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch: Dispatch<any> = useDispatch();
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

	const onSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
