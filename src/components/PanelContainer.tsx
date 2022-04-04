import type { ReactElement } from 'react';

interface PanelProps {
	children: ReactElement[];
}
const PanelContainer = ({ children }: PanelProps) => (
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
