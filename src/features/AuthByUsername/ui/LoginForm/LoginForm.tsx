import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { type FormEvent } from 'react';
import Input from 'shared/ui/Input/Input';

type LoginFormProps = {
	className?: string;
};

const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<form className={classNames(styles.form, {}, [className])} onSubmit={onSubmit}>
			<Input label={t('enter your name')} id='user_name' name='user_name' placeholder={t('your name')} autoFocus/>
			<Input label={t('enter your password')} type='password' id='user_pass' name='user_pass' placeholder={t('password')}/>
			<Button type='submit' theme={ButtonTheme.OUTLINE} className='ml-a'>
				{t('login')}
			</Button>
		</form>
	);
};

export default LoginForm;
