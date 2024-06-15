import { type HTMLProps } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import styles from './Container.module.scss';

type ContainerProps = {
	className?: string;
	fluid?: boolean;
	gap?: boolean;
} & HTMLProps<HTMLElement>;

const Container = (props: ContainerProps) => {
	const { className, children, fluid, gap } = props;
	const mods: Mods = {
		[styles.containerFluid]: fluid,
		[styles.containerGap]: gap,
	};

	return (
		<div className={classNames(styles.container, mods, [className])}>
			{children}
		</div>
	);
};

export default Container;
