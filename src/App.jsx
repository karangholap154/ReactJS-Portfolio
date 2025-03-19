import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Qualification } from './components/qualification/Qualification';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ScrollUp } from './components/scrollUp/ScrollUp';
import { Darkmode } from './components/darkmode/Darkmode';
import { Projects } from './components/projects/Projects';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Qualification />
      <Contact/>
      <Footer />
      <ScrollUp />
      <Darkmode/>
    </main>
    </>
  );
}

export default App;