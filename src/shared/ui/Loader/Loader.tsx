import styles from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type LoaderProps = {
	className?: string;
};

const Loader = ({ className }: LoaderProps) => {
	return (
		<span className={classNames(styles.loader, {}, [className])}></span>
	);
};

export default Loader;
