import styles from './LoginForm.module.scss';
import { type FormEvent, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { loginActions } from '../../model/slice/loginSlice';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import getLoginState from '../../model/selectors/getLoginState/getLoginState';
import loginByUsername from '../../model/sevices/loginByUsername/loginByUsername';
import Text, { TextTheme } from 'shared/ui/Text/Text';

type LoginFormProps = {
	className?: string;
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password, error, isLoading } = useSelector(getLoginState);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();
		// @ts-expect-error
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
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
	);
});

export default LoginForm;
