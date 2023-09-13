import React from 'react';
import Hero from './Sections/Hero';
import PopularProducts from './Sections/PopularProducts';
import SuperQuality from './Sections/SuperQuality';
import Services from './Sections/Services';
import SpecialOffers from './Sections/SpecialOffers';
import CustomerReviews from './Sections/CustomerReviews';
import Subscribe from './Sections/Subscribe';
import Footer from './Sections/Footer';
import Nav from './Components/Nav';

const App = () => 
      (
 <main className='relative'>
   <Nav></Nav>
  <section className='xl:padding-1 wide:padding-r padding-b'>
    <Hero></Hero>
  
  </section> 
  <section className='padding'>
    <PopularProducts></PopularProducts>
  </section>
  <section className='padding'>
   <SuperQuality></SuperQuality>
  </section>
  <section className='padding-x py-10'>
    <Services></Services>
  </section>
  <section className='padding'>
    <SpecialOffers></SpecialOffers>
  </section>
  <section className=' bg-pale-blue padding'>
    <CustomerReviews></CustomerReviews>
  </section>
  <section className='padding-x sm:py-32 py-16 w-full '>
    <Subscribe></Subscribe>
  </section>
  <section className='padding-x bg-black text-white-400 padding-t pb-8'>
    <Footer></Footer>
  </section>
 </main>




  )




export default App;
