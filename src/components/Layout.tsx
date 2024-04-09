import type { FC } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Head from './Head';
import LoadingOrError from './LoadingOrError';

import BgImg from '../assets/codez3.jpg';


const Layout: FC = () => (
  <>
    <Suspense fallback={<LoadingOrError />}>
      <div className='grid h-full min-w-full grid-rows-[5rem_auto_4rem]'>
        <img className='opacity-15 absolute inset-0 top-20 -z-10 max-h-[60%] w-full -skew-y-6 object-cover blur-sm'
          src={BgImg}
          alt='Background'
        />
        <Head title='Home' />
        <section className='mx-[120px]'>
          <Outlet />

        </section>
        <Footer />
      </div>
    </Suspense>
    <ToastContainer autoClose={3000} closeButton />
  </>
);

export default Layout;