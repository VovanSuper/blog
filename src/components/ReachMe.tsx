/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import Arrow from './Arrow';

interface ReachMeProps {
	href?: string;
}

const ReachMe = ({ href = '/about' }: ReachMeProps) => (
	<div
		className='
  group 
  flex 
  cursor-pointer
  flex-nowrap
  items-center 
  gap-2 
  text-linkHover 
  hover:text-linkSilver
  md:ml-auto
  '
	>
		<NavLink className='flex gap-2' to={href}>
			<Arrow group='group' />
			<span className='hidden md:block'>Reach Me </span>
		</NavLink>
	</div>
);

export default ReachMe;
