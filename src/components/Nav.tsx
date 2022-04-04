import type { FC, HTMLAttributes } from 'react';
import type { NavProps as NavItemProps } from './NavItem';
import NavItem from './NavItem';

interface NavProps extends HTMLAttributes<HTMLDivElement> {
	items: NavItemProps[];
}

const Nav: FC<NavProps> = ({ items }: NavProps) => (
	<nav className='m-auto max-w-fit'>
		<ul className='flex flex-col gap-10 md:flex-row'>{!!items.length && items.map(item => <NavItem {...item} key={item.title} />)}</ul>
	</nav>
);

export default Nav;
