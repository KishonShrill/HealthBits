import React from 'react';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Banner from './components/Banner.jsx';
import ContentInfo from './components/ContentInfo.jsx';
import FacebookPosts from './components/HealthBits.jsx';
import Updates from './components/Updates.jsx';
import Footer from './components/Footer.jsx';

import './styles/App.css'
import animationOnScreen from './components/Observer.jsx';

export default function App() {
  animationOnScreen;
  return (
    <>
      <Header />
      <Hero />
      <ContentInfo />
      {/* <Banner /> */}
      <FacebookPosts />
      <Updates />
      <Footer />
    </>
  );
};

function MyButton() {
  return (
    <button className='btn'>
      I'm a Button
    </button>
  );
};

