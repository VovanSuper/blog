import type { FC, HTMLAttributes, ReactChild } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import ReachMe from './ReachMe';


interface Props extends HTMLAttributes<HTMLHeadElement> {
	children?: ReactChild;
}

const menuItems = [
	{ title: 'Home', href: '/home' },
	{ title: 'Blog', href: '/blog' },
	{ title: 'About', href: '/about' },
];

const Head: FC<Props> = ({ children }: Props) => (
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

export default Head;
