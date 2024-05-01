import type { FC, PropsWithChildren } from 'react';

const ListContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex flex-col items-center py-8 lg:py-16 px-8 md:px-16 lg:px-32 text-bgTop w-full'>
    {children}
  </div>
);

export default ListContainer;
