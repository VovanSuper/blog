import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ExperienceProps {
	title: string;
	def: string;
	href?: string;
}

const Experience: FC<ExperienceProps> = ({ title, def, href = '/about' }) => {
	const navigate = useNavigate();

	return (
		<article
			className={`
				items-left 
				group
				flex 
				cursor-pointer
				flex-col
				py-1
				pl-0
				first:pt-0
				
				xl:py-10
				xl:pl-10
  `}
			role='navigation'
			onClick={() => navigate(href)}
		>
			<h1 className={`
					text-sm 
					font-bold 
					text-linkNormal 
					xl:text-2xl`}>
				{title}
			</h1>
			<h2 className={`
					text-sm 
					group-hover:text-linkHover 
					font-normal 
					text-linkSilver 
					xl:text-lg`}>
				{def}
			</h2>
		</article>
	);
};
export default Experience;
