import { FacebookLogo, GitHubLogo, LinkedInLogo, SocialIcon, SocialUrls } from './social';

const Footer = () => (
	<footer className='mx-28 flex items-center justify-around p-10 xs:p-5'>
		<div className='flex place-content-center place-items-center gap-3'>
			<p className='text-xs text-linkSilver'>All right reserved (C)</p>
			<p className='text-sm text-linkSilver'>
				<a href='mailto:me@ovsyukov.ru'>Vladimir Ovsyukov</a>
			</p>
		</div>
		<div className='flex'>
			<SocialIcon footerIcons url={SocialUrls.GITHUB} element={<GitHubLogo />} />
			<SocialIcon footerIcons url={SocialUrls.LINKEDIN} element={<LinkedInLogo />} />
			<SocialIcon footerIcons url={SocialUrls.FB} isLast element={<FacebookLogo />} />
		</div>
	</footer>
);

export default Footer;
