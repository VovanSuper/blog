import Root from 'components/Root';
import type { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
	{ path: "*", Component: Root },
], {});



const App: FC = () => <RouterProvider router={router} />;

export default App;

