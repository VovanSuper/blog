import { useNavigate } from 'react-router-dom';
import ArrowBig from './ArrowBig';

const ReachMeBig = () => {
	const navigate = useNavigate();
	return (
		<div
			className='
      group-transition-translate-all 
      transition-translate-all
      group
      flex 
      h-full
      w-[130%]
      -translate-x-20
      cursor-pointer
      flex-nowrap
      items-center
      gap-0
      text-linkHover 
      hover:bg-linkSilver
      hover:text-linkBlack50
      md:ml-auto 
      xl:w-full
      xl:translate-x-0
      xl:gap-5
    '
			role='button'
			onClick={() => navigate('/about')}
		>
			<ArrowBig group='group' width={180} />
			<span className='text-2xl font-bold text-linkWhite group-hover:text-linkSecondary'>Reach Me </span>
		</div>
	);
};

export default ReachMeBig;
