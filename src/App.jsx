import React from 'react';
import Nav from './component/Nav';
import Hero from './component/Hero';
import About from './component/About';
import Tools from './component/Tools';
import Skill from './component/Skill';
import Projects from './component/Projects';
import Contact from './component/Contact';

const App = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden bg-white dark:bg-slate-900 transition-colors duration-300'>
      <Nav/>
      <Hero/>
      <About/>
      <Tools/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
};


export default App;