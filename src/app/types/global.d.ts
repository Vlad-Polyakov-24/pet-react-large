declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg' {
	import type React from 'react';
	const svg: React.FC<React.SVGProps<SVGSVGElement>>;
	export default svg;
}
declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';
type DeepPartial<T> = T extends Record<string, unknown> ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;

