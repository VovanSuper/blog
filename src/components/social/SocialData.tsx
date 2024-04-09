import type { FC, ReactElement } from 'react';

interface ISocialDataProps {
	url: string;
	element: ReactElement;
	isLast?: boolean;
	isFooterIcons?: boolean;
}
const SocialIcon: FC<ISocialDataProps> = ({ url, element, isLast = false, isFooterIcons: footerIcons = false }: ISocialDataProps) => (
	<a
		className={`
      ${footerIcons && !isLast ? 'mx-8' : 'ml-8'}
      cursor-pointer
      p-1
    `}
		href={url}
		target='_blank'
		rel='noreferrer'
	>
		{element}
	</a>
);

const FacebookLogo = () => (
	<div className='p-1'>
		<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				className='fill-linkHover hover:fill-linkSilver'
				d='M29.5312 15C29.5312 6.97266 23.0273 0.46875 15 0.46875C6.97266 0.46875 0.46875 6.97266 0.46875 15C0.46875 22.2527 5.78262 28.2645 12.7295 29.3555V19.2006H9.03809V15H12.7295V11.7984C12.7295 8.15684 14.8975 6.14531 18.218 6.14531C19.8082 6.14531 21.4711 6.42891 21.4711 6.42891V10.0031H19.6383C17.8336 10.0031 17.2705 11.1234 17.2705 12.2725V15H21.3006L20.6561 19.2006H17.2705V29.3555C24.2174 28.2645 29.5312 22.2527 29.5312 15Z'
			/>
		</svg>
	</div>
);

const LinkedInLogo = () => (
	<div className='p-1'>
		<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				className='fill-linkHover hover:fill-linkSilver'
				d='M25.5612 25.5616H21.1161V18.6004C21.1161 16.9404 21.0865 14.8035 18.8043 14.8035C16.4891 14.8035 16.1348 16.6122 16.1348 18.4795V25.5612H11.6899V11.246H15.9571V13.2023H16.0168C16.4439 12.4722 17.061 11.8715 17.8024 11.4642C18.5438 11.057 19.3818 10.8585 20.2271 10.8899C24.7324 10.8899 25.563 13.8533 25.563 17.7086L25.5612 25.5616V25.5616ZM6.67429 9.28934C5.24964 9.28958 4.09452 8.13481 4.09429 6.71016C4.09405 5.28551 5.2487 4.1304 6.67335 4.13016C8.098 4.12981 9.25312 5.28458 9.25335 6.70923C9.25348 7.39337 8.98183 8.04955 8.49816 8.53341C8.0145 9.01727 7.35843 9.28919 6.67429 9.28934V9.28934ZM8.89687 25.5618H4.44714V11.246H8.89675V25.5616L8.89687 25.5618ZM27.7772 0.00200032H2.21355C1.00534 -0.0115934 0.0145215 0.956258 -0.000244141 2.16446V27.8347C0.0140527 29.0435 1.00476 30.0123 2.21343 29.9996H27.7772C28.9884 30.0146 29.983 29.0459 29.9998 27.8347V2.16247C29.9825 0.951922 28.9878 -0.0158122 27.7772 8.13187e-06'
			/>
		</svg>
	</div>
);

const GitHubLogo = ({ fill = 'linkHover' }: { fill?: string; }) => (
	<div className='p-1'>
		<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				className={`fill-${fill} hover:fill-linkSilver`}
				d='M27.0563 -0.139069H3.24675C1.45427 -0.139069 0 1.3172 0 3.11214V26.9544C0 28.7493 1.45427 30.2056 3.24675 30.2056H27.0563C28.8488 30.2056 30.303 28.7493 30.303 26.9544V3.11214C30.303 1.3172 28.8488 -0.139069 27.0563 -0.139069ZM18.7568 25.8503C18.1886 25.9519 17.9789 25.5997 17.9789 25.3084C17.9789 24.9427 17.9924 23.0732 17.9924 21.5628C17.9924 20.5061 17.6407 19.8356 17.2281 19.4834C19.7308 19.2057 22.3688 18.8602 22.3688 14.532C22.3688 13.2993 21.9291 12.6829 21.2121 11.8904C21.3271 11.5992 21.7127 10.4003 21.0971 8.84241C20.1569 8.55115 18.006 10.0548 18.006 10.0548C17.1131 9.80423 16.1458 9.67553 15.1921 9.67553C14.2384 9.67553 13.2711 9.80423 12.3782 10.0548C12.3782 10.0548 10.2273 8.55115 9.28707 8.84241C8.67154 10.3935 9.05033 11.5924 9.17208 11.8904C8.45509 12.6829 8.11688 13.2993 8.11688 14.532C8.11688 18.8399 10.6399 19.2057 13.1426 19.4834C12.8179 19.7746 12.5271 20.2758 12.4256 20.9938C11.783 21.2851 10.1393 21.7863 9.15855 20.0523C8.54302 18.9821 7.43371 18.8941 7.43371 18.8941C6.33793 18.8805 7.35931 19.585 7.35931 19.585C8.08983 19.9236 8.6039 21.2241 8.6039 21.2241C9.26001 23.2358 12.3985 22.5585 12.3985 22.5585C12.3985 23.5 12.4121 25.0307 12.4121 25.3084C12.4121 25.5997 12.2091 25.9519 11.6342 25.8503C7.16991 24.3534 4.04491 20.0997 4.04491 15.1281C4.04491 8.91014 8.79329 4.18911 15.0027 4.18911C21.2121 4.18911 26.2446 8.91014 26.2446 15.1281C26.2514 20.0997 23.221 24.3602 18.7568 25.8503ZM12.1212 21.7118C11.9927 21.7389 11.8709 21.6847 11.8574 21.5966C11.8439 21.495 11.9318 21.407 12.0603 21.3799C12.1889 21.3664 12.3106 21.4205 12.3241 21.5086C12.3444 21.5966 12.2565 21.6847 12.1212 21.7118ZM11.4786 21.6508C11.4786 21.7389 11.3772 21.8134 11.2419 21.8134C11.0931 21.8269 10.9916 21.7524 10.9916 21.6508C10.9916 21.5628 11.0931 21.4883 11.2284 21.4883C11.3569 21.4747 11.4786 21.5492 11.4786 21.6508ZM10.5519 21.5763C10.5249 21.6644 10.3896 21.705 10.2746 21.6644C10.1461 21.6373 10.0582 21.5357 10.0852 21.4476C10.1123 21.3596 10.2476 21.3189 10.3626 21.346C10.4978 21.3867 10.5858 21.4883 10.5519 21.5763ZM9.71997 21.2106C9.65909 21.2851 9.53057 21.2715 9.42911 21.1699C9.32765 21.0819 9.3006 20.9532 9.36824 20.8922C9.42911 20.8177 9.55763 20.8313 9.65909 20.9329C9.74702 21.0209 9.78084 21.1564 9.71997 21.2106ZM9.10444 20.5942C9.04356 20.6348 8.92857 20.5942 8.85417 20.4926C8.77976 20.391 8.77976 20.2758 8.85417 20.2284C8.92857 20.1675 9.04356 20.2149 9.10444 20.3165C9.17884 20.4181 9.17884 20.54 9.10444 20.5942V20.5942ZM8.66477 19.9372C8.6039 19.9981 8.50243 19.9643 8.42803 19.8965C8.35363 19.8085 8.3401 19.7069 8.40097 19.6595C8.46185 19.5985 8.56331 19.6324 8.63772 19.7001C8.71212 19.7882 8.72565 19.8898 8.66477 19.9372ZM8.21158 19.4359C8.18452 19.4969 8.09659 19.5105 8.02219 19.463C7.93425 19.4224 7.89367 19.3479 7.92072 19.2869C7.94778 19.2463 8.02219 19.226 8.11012 19.2598C8.19805 19.3072 8.23864 19.3818 8.21158 19.4359Z'
			/>
		</svg>
	</div>
);

const CVLogo = ({ fill = 'linkHover' }: { fill?: string; }) => (
	<div className='p-1'>
		<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				className={`fill-${fill} hover:fill-linkSilver`}
				d="M7.71429 0.125C3.45536 0.125 0 3.56836 0 7.8125V64.1875C0 68.4316 3.45536 71.875 7.71429 71.875H64.2857C68.5446 71.875 72 68.4316 72 64.1875V7.8125C72 3.56836 68.5446 0.125 64.2857 0.125H7.71429ZM23.6057 21.4633C26.7615 21.4633 29.5653 22.5506 31.63 24.1813C33.5393 25.6951 34.4335 27.2093 35.2136 28.5684L29.7617 31.2829C29.3717 30.3916 28.9024 29.4592 27.6972 28.451C26.3716 27.4017 25.0489 27.0923 23.9165 27.0923C19.4766 27.0923 17.1392 31.2072 17.1392 35.7867C17.1392 41.8042 20.2187 44.7907 23.9165 44.7907C27.5005 44.7907 28.9434 42.3066 29.8758 40.7171L35.2929 43.4729C34.2779 45.0626 33.3042 46.6176 31.1223 48.1285C29.9552 48.9437 27.2689 50.5367 23.4505 50.5367C16.1656 50.5367 10.2857 45.2586 10.2857 35.9792C10.2857 27.8695 15.8167 21.4633 23.6057 21.4633ZM35.7369 22.3166H43.0599L48.7463 41.8041L54.3913 22.3166H61.7143L52.1712 49.7212H45.1623L35.7369 22.3166Z" fill="black" />
		</svg>

	</div>
);

export enum SocialUrls {
	GITHUB = 'https://github.com/VovanSuper',
	TWITTER = 'https://twitter.com/OvsyukovV',
	FB = 'https://fb.com/ovsyukov',
	STACKOVERFLOW = 'https://stackoverflow.com/users/2499866/vovan-super?tab=profile',
	LINKEDIN = 'https://linkedin.com/in/ovsyukov',
	SITE = 'https://www.ovsyukov.ru',
	EMAIL_MAIN = 'mailto:me@ovsyukov.ru',
	EMAIL = 'mailto:ovsyukov@yandex.com',
	TEL = 'tel:+79620965480',
}

export { CVLogo, FacebookLogo, GitHubLogo, LinkedInLogo, SocialIcon };
export type { ISocialDataProps as SocialDataProps };

