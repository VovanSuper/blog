import type { FC } from 'react';
import type { ILink } from 'types';
import { CVLogo } from '../SocialData';

const CvLink: FC<ILink> = ({ href = 'https://storage.yandexcloud.net/www.ovsyukov.ru/CV/CV-main.pdf' }) => (
  <a
    className='absolute top-1 -right-28 xl:-right-72  bg-bgBottom p-4'
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label='Ссылка на CV'
  >
    <div className='p-1' style={{
      clipPath: 'polygon(0  15%, 95% 0%, 95% 100%, 20% 100%)'
    }}
    >
      <CVLogo fill='linkNormal' />
    </div>
  </a>
);
export default CvLink;