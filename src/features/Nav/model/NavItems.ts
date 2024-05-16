import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import PageMainIcon from 'shared/assets/icons/page-main_icon.svg';
import PageAboutIcon from 'shared/assets/icons/page-about_icon.svg';
import PageProfileIcon from 'shared/assets/icons/page-profile_icon.svg';

export type NavItemType = {
	path: string;
	text: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
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
	},
];