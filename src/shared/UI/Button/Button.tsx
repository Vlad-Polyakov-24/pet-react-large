import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    DEFAULT = 'btn--default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
   const {
       className,
       children,
       theme,
       ...otherProps
   } = props;

    return (
        <button
            className={classNames(styles.btn, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
