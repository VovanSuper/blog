import type { FC, HTMLAttributes, ReactChild } from 'react';
import { useEffect } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import ReachMe from './ReachMe';

interface Props extends HTMLAttributes<HTMLHeadElement> {
	title: string;
	children?: ReactChild;
}

const menuItems = [
	{ title: 'Home', href: '/home' },
	{ title: 'Blog', href: '/blog' },
	{ title: 'About', href: '/about' },
];

const Head: FC<Props> = ({ title, children }: Props) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<header
			className='
			flex
			w-full
			flex-col
			items-center
			bg-bgTop 
			md:grid 
			md:min-h-[4rem] 
			md:grid-cols-3
			md:px-32
			'
		>
			<Logo />
			<Nav items={menuItems} />
			<ReachMe />
			{!!children && children}
		</header>
	);
};

export default Head;
