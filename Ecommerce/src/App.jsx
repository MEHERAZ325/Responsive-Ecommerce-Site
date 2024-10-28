import React from 'react'
import './App.css'
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar'
import Products from './component/Products/Products'
import AOS from 'aos'; 
import TopProducts from './component/TopProducts/TopProducts'
import 'aos/dist/aos.css'; 
import Banner from './component/Banner/Banner'
import Subscribe from './component/Subscribe/Subscribe'
import Testimonial from './component/Testimonial/Testimonial'
import Footer from './component/Footer/Footer'

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
