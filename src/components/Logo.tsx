import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: FC = () => {
	const navigate = useNavigate();
	return (
		<div onClick={() => navigate('/', { replace: true })} role='link'>
			<svg className='group fill-linkNormal transition-transform hover:scale-110' width='55' height='40' viewBox='0 0 45 30' xmlns='http://www.w3.org/2000/svg'>
				<path
					className='fill-linkHover group-hover:fill-linkHover'
					d='M24.2194 22.213C26.7637 21.8203 28.9833 20.4926 30.4438 18.4896C31.9043 16.4866 32.5005 13.9527 32.1156 11.3838C31.7308 8.81484 30.3927 6.3959 28.3632 4.60044C26.3337 2.80498 23.7589 1.76227 21.1429 1.67641L21.3486 5.40793C23.0193 5.46276 24.6636 6.12866 25.9597 7.27529C27.2558 8.42192 28.1103 9.96672 28.3561 11.6073C28.6018 13.2479 28.2211 14.8661 27.2884 16.1453C26.3557 17.4244 24.9382 18.2724 23.3133 18.5232L24.2194 22.213Z'
					fillOpacity='0.55'
				/>
				<path
					className='group-hover:fill-linkHover'
					d='M35 12.1211C35 18.0039 30.3128 22.7729 24.5308 22.7729C18.7489 22.7729 14.0617 18.0039 14.0617 12.1211C14.0617 6.23821 18.7489 1.46921 24.5308 1.46921C30.3128 1.46921 35 6.23821 35 12.1211ZM17.6471 12.1211C17.6471 15.9892 20.7291 19.1249 24.5308 19.1249C28.3326 19.1249 31.4145 15.9892 31.4145 12.1211C31.4145 8.25297 28.3326 5.11725 24.5308 5.11725C20.7291 5.11725 17.6471 8.25297 17.6471 12.1211Z'
				/>
				<path
					className='group-hover:stroke-linkHover'
					d='M3.09208 6.25687C7.3565 7.42252 7.18504 9.40985 7.92273 11.6584C8.889 14.6036 9.26101 20.3988 13.8683 20.4583'
					strokeWidth='4'
					stroke='#FFF'
				/>
			</svg>
		</div>
	);
};

export default Logo;
