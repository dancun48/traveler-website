
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Destinations from './components/destinations/Destinations';
import Deals from './components/deals/Deals';
import Blog from './components/blog/Blog';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {

  //for the video

  //const [playState, setPlayState] = useState(false);

    return (
      <div>
        <Navbar />
        <Hero />
        <div className='container'>
          <Destinations />
          <Deals />
          <Blog />
          <Testimonials/>
          <Contact />

          <Footer />
        </div>
        
      
      </div>
    )
}

export default App