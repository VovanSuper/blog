import type { ExperienceProps } from './Experience';
import Experience from './Experience';
import Panel from './Panel';

const experiences: ExperienceProps[] = [
	{
		title: 'Consulting',
		def: `Consulting on software stacks, services
        and cloud solutions for the best
        software development
        experiences`,
	},
	{
		title: 'Web apps development',
		def: `Developing Web applications using  most
          modern patterns and solutions `,
	},
	{
		title: 'Mobile apps development',
		def: `Mobile app design and development 
          services using most modern 
          hybrid development platforms`,
	},
	{
		title: 'Cloud patterns and solutions',
		def: `Offer solutions and developing
          microservices cloud applications
           `,
	},
	{
		title: 'Agile methodology',
		def: `Continuous delivery up to best 
          agile methodologies, practices `,
	},
];

export default () => (
	<Panel
		classes={`
    container
    hidden
    md:block
    group 
    flex 
    content-center 
    my-0 
    bg-linkBlack20
    relative
    p-5
    pt-20
    mr-10
    xl:p-20
    h-full
  `}
	>
		<div className='none'>
			{experiences.map(exp => (
				<Experience {...exp} key={exp.title} href={`/about#${exp.title}`} />
			))}
		</div>
	</Panel>
);
