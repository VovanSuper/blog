import type { ReactElement } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface Properties {
	error?: Error;
}
const LoadingOrError = ({ error }: Properties): ReactElement => (
	<div className='flex min-h-screen items-center justify-center'>
		<h1 className='text-cyan-100 text-xl ' data-testid='LoadingOrError'>
			{error ? (
				<div className='text-red-800 text-2xl'>{error.message}</div>
			) : (
				<div className='text-cyan-100 flex items-center gap-5'>
					<FaSpinner className='animate-spin-slow' />
					Loading
				</div>
			)}
		</h1>
	</div>
);

export default LoadingOrError;
