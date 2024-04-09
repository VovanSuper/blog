import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import ReachMe from './ReachMe';


type Props = HTMLAttributes<HTMLHeadElement>;

const menuItems = [
	{ title: 'Home', href: '/home' },
	{ title: 'Blog', href: '/blog', isEnabled: false },
	{ title: 'Contact', href: '/contact' },
	{ title: 'About', href: '/about' },
];

const Head: FC<PropsWithChildren<Props>> = ({ children }: Props) => (
	<header
		className='
			flex
			w-full
			flex-col
			items-center
			bg-bgTop
			px-5
			md:grid 
			md:min-h-[4rem] 
			md:grid-cols-3
			md:px-12
			'
	>
		<Logo />
		<Nav items={menuItems} />
		<ReachMe />
		{!!children && children}
	</header>
);

export default Head;
