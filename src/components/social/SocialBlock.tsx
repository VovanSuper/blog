import { FaEnvelope, FaFacebookSquare, FaGithubAlt, FaGlobe, FaLinkedin, FaMapMarkerAlt, FaPhone, FaStackExchange, FaTwitterSquare } from 'react-icons/fa';
import { SocialIcon, SocialUrls } from './SocialData';

const SocialBlock = () => (
	<div className='social-data w-full rounded-md border-2 border-bgTop py-3 px-2 xl:w-auto'>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='m-0 p-0 font-normal'>
						<FaMapMarkerAlt className='inline' height={40} />
						<span className='m-3'>Kaluga, Russia</span>
					</div>
				}
				url='#'
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='m-0 p-0 font-bold'>
						<FaGlobe className='inline' height={40} />
						<span className='m-3'>www.ovsyukov.ru</span>
					</div>
				}
				url={SocialUrls.SITE}
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='xl::text-sm text-[0.7rem] font-extralight lg:font-light xl:font-normal'>
						<FaEnvelope className='inline' />
						<span className='m-3'>me@ovsyukov.ru</span>
					</div>
				}
				url={SocialUrls.EMAIL_MAIN}
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='xl::text-sm text-[0.7rem] font-extralight lg:font-light xl:font-normal'>
						<FaEnvelope className='inline' />
						<span className='m-3'>ovsyukov@yandex.com</span>
					</div>
				}
				url={SocialUrls.EMAIL}
			/>
		</div>

		<div className='leading-3'>
			<SocialIcon
				element={
					<div
						className='
        xl::text-lg 
        text-[0.7rem]  
        font-extralight 
        lg:font-light 
        xl:font-normal'
					>
						<FaPhone className='inline' height={40} />
						<span className='m-3'>+7 (962) 096 54 80</span>
					</div>
				}
				url={SocialUrls.TEL}
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='font-bold'>
						<FaGithubAlt className='inline' height={40} />
						<span className='m-3'>VovanSuper</span>
					</div>
				}
				url={SocialUrls.GITHUB}
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='font-bold'>
						<FaStackExchange className='inline' height={40} />
						<span className='m-3'>VovanSuper</span>
					</div>
				}
				url={SocialUrls.STACKOVERFLOW}
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='font-bold'>
						<FaLinkedin className='inline' height={40} />
						<span className='m-3'>ovsyukov</span>
					</div>
				}
				url={SocialUrls.LINKEDIN}
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='font-bold'>
						<FaFacebookSquare className='inline' height={40} />
						<span className='m-3'>ovsyukov</span>
					</div>
				}
				url={SocialUrls.FB}
			/>
		</div>
		<div className='leading-3'>
			<SocialIcon
				element={
					<div className='font-bold'>
						<FaTwitterSquare className='inline' height={40} />
						<span className='m-3'>ovsyukov</span>
					</div>
				}
				url={SocialUrls.TWITTER}
			/>
		</div>
	</div>
);
export default SocialBlock;
