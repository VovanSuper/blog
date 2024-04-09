import About from 'pages/About';
import Blog from 'pages/Blog';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import type { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Root: FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/home' element={<Navigate to='/' />} />
    </Route>
  </Routes>
);

export default Root;