import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from 'App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { registerSW } from 'virtual:pwa-register';
import './index.css';

// registerSW();

const MAX_RETRIES = 1;
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES,
		},
	},
});

createRoot(document.querySelector('#root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
);
