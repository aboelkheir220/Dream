import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero'
import Feature from './Feature'
import Lesson from './Lesson'
import Form from './Form'
import Pricing from './Pricing'
import Our from './Our'
import Footer from './Foooter'

function App() {
  return (
    <div className="App">
       <Header />
       <Hero />
       <Feature />
       <Lesson />
       <Form />
       <Pricing />
       <Our />
       <Footer />
    </div>
  );
}

export default App;
