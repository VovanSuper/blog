import type { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavProps extends HTMLAttributes<HTMLLIElement> {
	title?: string;
	href: string;
}

const NavItem: FC<NavProps> = ({ title, href }: NavProps) => (
	<NavLink to={href} className={({ isActive }) => (isActive ? 'font-bold text-linkWhite' : '')}>
		<li
			className='
      hover:font-regular 
      m-0
      mb-3
      list-item
      cursor-pointer
      border-b-2
      border-transparent
      p-1
      text-linkSilver
      last-of-type:mb-10 
      hover:border-linkHover
      hover:text-linkHover 
      hover:transition-all
      md:m-2 
      md:p-2 
      md:last-of-type:mb-0
  '
		>
			{title ?? href}
		</li>
	</NavLink>
);

export default NavItem;
