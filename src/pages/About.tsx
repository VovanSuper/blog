import { BackEndSkills, CloudServices, CMSSkills, DbSkills, LangSkills, MobileSkills, OtherSkills, TestsSkills, WebSkills } from 'components/skills/SkillBlock';
import Summary from 'components/skills/Summary';
import { SocialBlock } from 'components/social';
import InterestsBlock from 'components/social/InterestsBlock';
import LanguagesBlock from 'components/social/LanguagesBlock';
import ProfilePhoto from '../assets/profile.jpg';

const About = () => (
	<section className='relative grid h-full w-full place-content-center'>
		<div className='container grid h-auto w-full grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]'>
			<article className='border-r-2 bg-cvMain p-10 text-dark50'>
				<div className='user-info flex flex-col items-center gap-10'>
					<div className='user-img'>
						<img className='max-w-32 max-h-32 rounded-md' src={ProfilePhoto} alt='Avatar' />
					</div>
					<h3 className='text-center text-3xl font-bold'>Vladimir Ovsyukov</h3>
					<em className='pl-1 text-sm font-semibold xl:text-lg'>
						1Full-Stack Angular, Ionic, React, Nodejs (MEAN / MERN) .Net / Asp.Net ( MVC / Core ), docker, microservices, Cloud developer
					</em>
					<SocialBlock />
					<LanguagesBlock />
					<InterestsBlock />
				</div>
			</article>

			<article className='border-r-2 bg-cvAside p-10'>
				<Summary />

				<div className='skills'>
					<LangSkills />
					<WebSkills />
					<BackEndSkills />
					<CloudServices />
					<MobileSkills />
					<CMSSkills />
					<DbSkills />
					<OtherSkills />
					<TestsSkills />
				</div>
			</article>
		</div>
	</section>
);

export default About;
