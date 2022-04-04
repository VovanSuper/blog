import { NavLink } from 'react-router-dom';
import Panel from './Panel';
import ReachMeBig from './ReachButton';

export default () => (
	<div className='container'>
		<Panel
			classes={`
    left-panel 
    container 
    group 
    flex 
    content-center 
    my-0
    bg-linkBlack50 
    backdrop-blur-md
    border-l-4
    border-linkWhite
    h-fit
    relative
    p-10
    md:p-20
    
    `}
		>
			<div
				className='
      flex 
      flex-col 
      place-content-center
      gap-10
      px-10
      pr-10
      text-5xl 
      text-linkWhite hover:text-linkNormal 
      xl:px-20 
      xl:pr-80
      '
			>
				<h2 className='text-5xl font-bold'>Consulting and software services</h2>
				<p className=' text-lg text-linkNormal'>To provide You with ideas about modern approaches, services and software stacks for your Next big thing</p>
				<p className=' text-sm text-linkSilver'>
					form design to prototype, implementing CI/CD for you web and mobile apps, cloud and hybrid solutions on Aws, DCP / Firebase or Azure
				</p>
			</div>
		</Panel>
		<div className='grid grid-cols-2 gap-0'>
			<div className='relative grid h-56 w-[100%] place-content-center bg-[#27839f41]'>
				<div className='absolute h-[50%] w-full border-l-4 border-b-4 border-linkWhite bg-transparent' />
			</div>
			<div className='h-56 w-[100%]'>
				<ReachMeBig />
			</div>
		</div>
		<div className='grid grid-cols-2 gap-0'>
			<NavLink to='/about'>
				<div
					className='
        text-linkBlack
        group
        grid 
        h-56 
        w-[100%] 
        place-content-center 
        bg-[#15334D]
        text-2xl
        font-bold
        tracking-widest
        hover:cursor-pointer
        hover:bg-linkBlack20
      '
				>
					<span
						className='
            tracking-widest 
            text-linkBlack50 
            group-hover:border-b-4
            group-hover:text-linkSilver
            '
					>
						More
					</span>
				</div>
			</NavLink>
			<div className='h-56 w-[100%] bg-[#15334D]' />
		</div>
	</div>
);
