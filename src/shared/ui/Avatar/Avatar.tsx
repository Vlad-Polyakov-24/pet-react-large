import styles from './Avatar.module.scss';
import { type CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

type AvatarProps = {
	className?: string;
	src?: string;
	alt?: string;
	size?: number;
};

const Avatar = (props: AvatarProps) => {
	const {
		className,
		src,
		alt = 'img desc',
		size = 100,
	} = props;
	const sizes = useMemo<CSSProperties>(() => ({
		width: size,
		height: size,
	}), [size]);

	return (
		<div className={classNames(styles.avatar, {}, [className])} style={sizes}>
			<picture>
				<img src={src} alt={alt}/>
			</picture>
		</div>
	);
};

export default Avatar;
