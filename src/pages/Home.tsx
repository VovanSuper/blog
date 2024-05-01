import LeftPanel from 'components/LeftPanel';
import PanelContainer from 'components/PanelContainer';
import RightPanel from 'components/RightPanel';
import type { FC, ReactElement } from 'react';

const Home: FC = (): ReactElement => (
	<PanelContainer>
		<LeftPanel />
		<RightPanel />
	</PanelContainer>
);

export default Home;