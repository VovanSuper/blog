import type { FC } from 'react';
import { GitHubLogo } from '../SocialData';
import RepoTag from './RepoTag';


interface Props {
  repo: string;
  name: string;
  commits: number;
  additions: number;
  deletions: number;
  description: string;
  tags: string[];
}

const GitHubRepository: FC<Props> = ({
  repo,
  name,
  commits,
  additions,
  deletions,
  description,
  tags,
}) => (
  <div className="relative col-span-3 row-span-2 xs:row-span-1 xs:pt-1/3 md:row-span-1 pt-2/3 md:col-span-2 md:pt-1/2">
    <div className="absolute flex overflow-hidden md:items-center inset-2">
      <a
        className="space-y-1 text-left sm:space-y-2"
        target="_blank"
        rel="noreferrer"
        href={`https://github.com/${repo}`}
      >
        <p className="flex items-center space-x-2 text-xl font-bold md:text-2xl lg:text-3xl">
          <span className="w-5 fill-current md:w-8 lg:w-10">
            <GitHubLogo />
          </span>
          <span>{name}</span>
        </p>
        <div className="space-x-2 font-mono text-sm md:text-base">
          <span className="text-300">{commits} Commits</span>
          <span className="text-green-500">+{additions}</span>
          <span className="text-red-500">-{deletions}</span>
        </div>
        <p className="text-sm text-300 md:text-base lg:text-lg">{description}</p>
        <div className="flex flex-wrap">
          {tags.map(tag => <RepoTag key={tag}>{tag}</RepoTag>)}
        </div>
      </a>
    </div>
  </div>
);

export default GitHubRepository;