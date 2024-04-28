import styles from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

type PageErrorProps = {
	className?: string;
};

const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const onReload = () => {
		location.reload();
	};

	return (
		<div className={classNames(styles.pageError, {}, [className])}>
			<h1>{t('an error has occurred')}</h1>
			<Button theme={ ButtonTheme.THEME_INVERTED } onClick={ onReload }>
				{t('refresh the page')}
			</Button>
		</div>
	);
};

export default PageError;
