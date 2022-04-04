import type { ReactElement } from 'react';

interface PanelProps {
	children: ReactElement;
	classes?: string;
}
const Panel = ({ children, classes = 'panel' }: PanelProps) => <div className={classes}>{children}</div>;

export default Panel;
