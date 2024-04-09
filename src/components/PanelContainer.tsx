import type { FC, PropsWithChildren } from 'react';

const PanelContainer: FC<PropsWithChildren> = ({ children }) => (
  <div
    className={`
    grid 
    h-full 
    grid-cols-1 
    gap-0
    md:grid-cols-[5fr_4fr]
    `}
  >
    {children}
  </div>
);

export default PanelContainer;
