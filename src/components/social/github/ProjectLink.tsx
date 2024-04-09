import type { FC } from 'react';
import type { ILink } from 'types';
import { GitHubLogo } from '../SocialData';


const ProjectLink: FC<ILink> = ({ href = 'https://github.com/VovanSuper/ovsyukov.online' }) => (
  <a
    className='absolute -bottom-1 -right-2 xl:bottom-0 xl:right-0 bg-linkBlack50 text-linkSilver p-4'
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label='GitHub'
    style={{
      clipPath: 'polygon(0 25%, 85% 0%, 97% 100%, 10% 90%)',
    }}
  >
    <div className='' style={{
      clipPath: 'polygon(0 35%, 85% 1%, 85% 100%, 40% 100%)',
    }}
    >
      <GitHubLogo fill='linkNormal' />
    </div>
  </a>
);
export default ProjectLink;