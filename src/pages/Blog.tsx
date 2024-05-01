/* eslint-disable @typescript-eslint/no-magic-numbers */
import ListContainer from 'components/ListContainer';
import type { FC, ReactElement } from 'react';

export interface IBLogItem {
  id: number;
  title: string;
  contents: string;
  data?: string;
}

const blogItems: IBLogItem[] = [
  { id: 1, title: 'Docker and containerization introduction', contents: 'Docker and containerization introduction' }
];

const Blog: FC = (): ReactElement => (
  <ListContainer>
    {blogItems.map((blogItem: IBLogItem) => (<div className="item" key={blogItem.id}> {blogItem.title} </div>))}

  </ListContainer>
);

export default Blog;
