import React from 'react';
import { RoutePath } from 'app/providers/AppRouter';
import PageMainIcon from 'shared/assets/icons/page-main_icon.svg';
import PageAboutIcon from 'shared/assets/icons/page-about_icon.svg';
import PageProfileIcon from 'shared/assets/icons/page-profile_icon.svg';
import PageArticlesIcon from 'shared/assets/icons/page-articles_icon.svg';

export type NavItemType = {
	path: string;
	text: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
};

export const NavItemsList: NavItemType[] = [
	{
		path: RoutePath.main,
		Icon: PageMainIcon,
		text: 'main',
	},
	{
		path: RoutePath.about,
		Icon: PageAboutIcon,
		text: 'about',
	},
	{
		path: RoutePath.profile,
		Icon: PageProfileIcon,
		text: 'profile',
		authOnly: true,
	},
	{
		path: RoutePath.articles,
		Icon: PageArticlesIcon,
		text: 'articles',
		authOnly: true,
	},
];