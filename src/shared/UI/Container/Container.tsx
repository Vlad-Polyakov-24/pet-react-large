import { HTMLProps } from 'react';
import styles from './Container.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ContainerProps extends HTMLProps<HTMLElement> {
    className?: string;
    fluid?: boolean;
}

const Container = ({ className, children, fluid }: ContainerProps) => {
    return (
        <div className={classNames(styles.container, {[styles.containerFluid]: fluid}, [className])}>
            {children}
        </div>
    );
};

export default Container;
