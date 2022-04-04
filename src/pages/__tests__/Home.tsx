import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import HomePage from 'pages/Home';
import renderWithProviders from 'testUtils';

async function renderHomePage(): Promise<void> {
	renderWithProviders(<HomePage />);
	await waitForElementToBeRemoved(screen.queryByText('Loading...'));
}

describe('<Gallery />', () => {
	it('renders', async () => {
		await renderHomePage();

		expect(screen.getByText('Consulting and software services'.trim())).toBeTruthy();
	});
});
