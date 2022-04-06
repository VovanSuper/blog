/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

const SkillMeterBlocks = 5;

export interface SkillWrapperProps {
	title: string;
	skills: string[];
	bg?: string;
	color?: string;
	count?: number;
}

const SkillMeterBox = ({ count = SkillMeterBlocks }: { count: number; }) => (
	<div className='container flex min-w-full justify-end gap-4'>
		<div className='mx-4 font-bold leading-9 text-green900'>
			<small className='m-1 mx-4 border-b-2 font-light text-linkHover'>Level: </small>
			{count} / 5
		</div>
		{Array.from({ length: SkillMeterBlocks }).map((_, i) => (
			<div
				className={`
        m-2
        mx-1
        h-4
        w-4
        rounded-xl
        xl:mx-2
        xl:w-12
        ${i < count ? 'bg-green900' : 'bg-linkBlack20'}
       `}
				key={i}
			/>
		))}
	</div>
);

const SkillBoxWrapper = ({ count = SkillMeterBlocks, title, skills, bg, color }: SkillWrapperProps) => (
	<div className='relative my-5 grid grid-cols-[1fr_7fr] xs:my-10'>
		<div className='col-start-1 self-center font-bold text-dark700'>{title}</div>
		<div className='skills-list '>
			<div className='col-start-2 flex flex-wrap gap-y-1 gap-x-2 font-light xl:gap-x-10 xl:font-normal'>
				{skills.map(item => (
					<div
						className={`
          ${bg ?? 'bg-linkSecondary'} 
          ${color ?? 'text-dark900'} 
          p-[5px]
          text-xs
          xl:p-2 
          xl:text-sm
        `}
						key={item}
						style={{
							clipPath: 'polygon(0 25%, 95% 10%, 105% 100%, 0% 100%)',
						}}
					>
						{item}
					</div>
				))}
			</div>
			<SkillMeterBox count={count} />
		</div>
	</div>
);

const LangSkills = () => <SkillBoxWrapper title='Programming Languages: ' skills={['Javascript / ES5 / ES2015', 'TypeScript', 'C#', 'Python', 'bash', 'php']} />;

const WebSkills = () => (
	<SkillBoxWrapper
		title='Web: '
		bg='bg-linkHover'
		skills={[
			'Angular',
			'RxJs',
			'NgRx',
			'ReactJs',
			'Redux',
			'redux toolkit',
			'JavaScript',
			'jQuery',
			'CSS / CSS3 / SCSS / LESS',
			'CSSOM',
			'PostCSS',
			'BEM_',
			'bootstrap',
			'Angular Material',
			'PrimeNg',
			'styled-components',
			'Tailwind',
			'Bulma.css',
			'MUI',
			'Web components',
			'WebSocket',
			'WebRTC',
			'PeerJs',
			'Web Performance',
			'...',
		]}
	/>
);

const MobileSkills = () => (
	<SkillBoxWrapper
		title='Mobile: '
		bg='bg-linkBlack20'
		color='text-dark100'
		count={4}
		skills={['Ionic', 'Cordova', 'Capacitor', 'StencilJs', 'React Native', 'XCode', 'Android Studio']}
	/>
);

const CMSSkills = () => <SkillBoxWrapper count={3} title='CMS: ' bg='bg-dark900' color='text-dark100' skills={['Directus', 'Strapi', 'Contentful', 'WP']} />;

const DbSkills = () => (
	<SkillBoxWrapper
		title='Databases: '
		bg='bg-dark100'
		color='text-linkWhite'
		count={4}
		skills={['Postgres', 'mysql', 'mongoDb', 'Ms Sql Server', 'Redis', 'Firebase RTDB / firestore', 'Aws DynamoDb', 'sqlite']}
	/>
);

const OtherSkills = () => (
	<SkillBoxWrapper
		title='Other: '
		bg='bg-green700'
		color='text-dark900'
		skills={[
			'Git / GitHub / Bitbucket / GitLab',
			'CI/CD (github actions, gitlab, Azure pipelines)',
			'Jira',
			'Confluence',
			'Trello',
			'Figma',
			'XD',
			'Nginx',
			'IIS',
			'Ubuntu Server',
			'Networking',
			'api',
			'Facebook api (Auth / Graph)',
			'Paypal api',
			'Stripe api',
			'Apollo',
			'Webpack',
			'Gulp',
			'rollup',
		]}
	/>
);

const CloudServices = () => (
	<SkillBoxWrapper
		title='Cloud Services: '
		bg='bg-bgBottom'
		color='text-dark900'
		skills={[
			'AWS lambda',
			'AWS apigateway',
			'AWS CloudFormation',
			'AWS Sns',
			'AWS Sqs',
			'Firebase',
			'Azure VM',
			'Azure functions',
			'Azure webapps',
			'Azure Dns',
			'Azure Devops / VSTS',
			'Yandex cloud',
			'serverless',
		]}
	/>
);

const BackEndSkills = () => (
	<SkillBoxWrapper
		title='Backend: '
		bg='bg-linkHover'
		color='text-black50'
		count={4}
		skills={['Node.js', 'NextJs', 'Nest.js', 'typeOrm', 'knex', 'mongoose', 'sequelize', '.Net Framework', 'asp.net', 'entity framework', 'Docker', 'Docker Compose']}
	/>
);

const TestsSkills = () => (
	<SkillBoxWrapper
		title='Testing: '
		bg='bg-linkHover'
		color='text-black50'
		count={4}
		skills={['Cypress', 'Puppeteer', 'spectator', 'Jest', 'jasmine', 'mocha', 'chai', 'supertest', 'Testing Library (react / angular)', 'xUnit', 'cucumberJs']}
	/>
);

export { SkillBoxWrapper, WebSkills, BackEndSkills, LangSkills, MobileSkills, CloudServices, CMSSkills, DbSkills, OtherSkills, TestsSkills };
