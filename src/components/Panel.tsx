import type { FC, PropsWithChildren } from 'react';

interface PanelProps {
	classes?: string;
}

const Panel: FC<PropsWithChildren<PanelProps>> = ({ classes = 'panel', children }) => <div className={classes}>{children}</div>;

export default Panel;
