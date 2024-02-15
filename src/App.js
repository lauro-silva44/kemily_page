import './App.css';
import HomeSection from './sections/home-section';
import React from 'react';
import ServicesSection from './sections/services-section';
import Cases from './sections/cases';
import Contacts from './sections/contacts';
import ScrollToTopButton from './components/take_to_top_button';

function App() {
  return (
    <div >
     <HomeSection/>
     <ServicesSection/>
     <Cases/>
     <Contacts/>
     <ScrollToTopButton/>
    </div>
  );
}

export default App;
