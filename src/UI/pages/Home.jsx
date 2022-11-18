import React from 'react'
import HeroCarousel from '../sections/HeroCarousel'
import NavBar from '../sections/NavBar'
import NavBarM from '../sections/NavBarM'
import useResize from '../../hooks/useResize'
import ProductsCarousel from '../sections/ProductsCarousel'
import ImagesGallery from '../sections/ImagesGallery'
import Newsletter from '../sections/Newsletter'
import NewsSection from '../sections/NewsSection'
import Offers from '../sections/Offers'
import Footer from '../sections/Footer'

const Home = () => {
  /* some bugs when used the hook in two componts */
  let { resized, setResized } = useResize();
  return (
    <>
    <HeroCarousel />
     {/*  {}
      {resized > 1200 && <ProductsCarousel resized={resized}/>} */}
      {/* {<NewsSection resized={resized}/>} */}
      {/* <ImagesGallery/>
      <Offers/>
      <Newsletter/>
      {resized > 1200 ? <NavBar/> : <NavBarM/>}
      <Footer/> */}
    </>
  )
}

export default Home