import LeftPanel from 'components/LeftPanel';
import PanelContainer from 'components/PanelContainer';
import RightPanel from 'components/RightPanel';
import type { ReactElement } from 'react';

export default (): ReactElement => (
	<PanelContainer>
		<LeftPanel />
		<RightPanel />
	</PanelContainer>
);
