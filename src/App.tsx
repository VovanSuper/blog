import Footer from 'components/Footer';
import Head from 'components/Head';
import LoadingOrError from 'components/LoadingOrError';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BgImg from './assets/codez3.jpg';


const Home = lazy(async () => import('pages/Home'));
const Blog = lazy(async () => import('pages/Blog'));
const About = lazy(async () => import('pages/About'));

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<div className='grid h-full min-w-full grid-rows-[5rem_auto_4rem]'>
					<img
						className='
							opacity-15 
							absolute
							inset-0 
							top-20  
							-z-10 
							max-h-[60%]
							w-full
							-skew-y-6 
							object-cover
							blur-sm
					'
						src={BgImg}
						alt='Background'
					/>
					<Head title='Home' />
					<section className='mx-[120px]'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/blog' element={<Blog />} />
							<Route path='home' element={<Navigate to='/' />} />
						</Routes>
					</section>
					<Footer />
				</div>
			</Suspense>
		</BrowserRouter>
	);
}
