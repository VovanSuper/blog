import type { FC } from 'react';
import { FacebookLogo, GitHubLogo, LinkedInLogo, SocialIcon, SocialUrls } from './social';

const Footer: FC = () => (
	<footer className='mx-28 flex items-center justify-around p-10 xs:p-5'>
		<div className='flex place-content-center place-items-center gap-3 text-linkSilver'>
			<p className='text-xs'>All right reserved (C)</p>
			<p className='text-xs'>{new Date().getFullYear()}</p>
			<p className='text-sm'>
				<a href='mailto:me@ovsyukov.ru'>Vladimir Ovsyukov</a>
			</p>
		</div>
		<div className='flex'>
			<SocialIcon isFooterIcons url={SocialUrls.GITHUB} element={<GitHubLogo />} />
			<SocialIcon isFooterIcons url={SocialUrls.LINKEDIN} element={<LinkedInLogo />} />
			<SocialIcon isFooterIcons url={SocialUrls.FB} isLast element={<FacebookLogo />} />
		</div>
	</footer>
);

export default Footer;
