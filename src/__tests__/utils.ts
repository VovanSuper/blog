import { act, renderHook } from '@testing-library/react-hooks';
import { useMediaQuery } from 'utils';

const BELOW_MIN_WIDTH = 599;
const MIN_WIDTH = 600;

describe('useMediaQuery', () => {
	it('renders', () => {
		window.resizeTo(BELOW_MIN_WIDTH, 0);
		const { result } = renderHook(() => useMediaQuery(`(min-width: ${MIN_WIDTH}px)`));
		expect(result.current).toBeFalsy();

		act(() => window.resizeTo(MIN_WIDTH, 0));

		expect(result.current).toBeTruthy();
	});
});
