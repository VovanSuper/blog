import type { FC } from 'react';

const InterestsBlock: FC = () => (
	<div className='interests w-full '>
		<h4 className='border-b-4 border-x-linkBlack50 pb-1 font-bold'>Interests</h4>
		<div className='container xl:flex xl:flex-row xl:justify-between'>
			<h5>IPFS</h5>
			<h5>IoT</h5>
			<h5>BlockChain</h5>
		</div>
	</div>
);
export default InterestsBlock;
