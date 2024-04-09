import Footer from 'components/Footer';
import Head from 'components/Head';
import LoadingOrError from 'components/LoadingOrError';
import Contact from 'pages/Contact';
import type { FC, ReactElement } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BgImg from './assets/codez3.jpg';


const Home = lazy(async () => import('pages/Home'));
const Blog = lazy(async () => import('pages/Blog'));
const About = lazy(async () => import('pages/About'));

const Root: FC = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/blog' element={<Blog />} />
		<Route path='/contact' element={<Contact />} />
		<Route path='/home' element={<Navigate to='/' />} />
	</Routes>
);

const router = createBrowserRouter([
	{ path: "*", Component: Root },
], {});


export default function App(): ReactElement {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<LoadingOrError />}>
					<div className='grid h-full min-w-full grid-rows-[5rem_auto_4rem]'>
						<img className='opacity-15 absolute inset-0 top-20 -z-10 max-h-[60%] w-full -skew-y-6 object-cover blur-sm'
							src={BgImg}
							alt='Background'
						/>
						<Head title='Home' />
						<section className='mx-[120px]'>
							<RouterProvider router={router} />

						</section>
						<Footer />
					</div>
				</Suspense>
			</BrowserRouter>
			<ToastContainer autoClose={3000} closeButton />
		</>
	);
}
