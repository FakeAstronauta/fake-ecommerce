import NavBar from '../sections/NavBar'
import HeroCarousel from '../sections/HeroCarousel'
import ProductsCarousel from '../sections/ProductsCarousel'
import ImagesGallery from '../sections/ImagesGallery'
import Newsletter from '../sections/Newsletter'
import NewsSection from '../sections/NewsSection'
import Offers from '../sections/Offers'
import Footer from '../sections/Footer'
import { ResizeProvider } from '../../context/ResizeProvider'

const Home = () => {
  /* some bugs when used the hook in two componts */
  // let { resized, setResized } = useResize();
  return (
    <>
      <ResizeProvider>
        <HeroCarousel />
        <ProductsCarousel />
        <NewsSection />
        <ImagesGallery />
        <Offers />
        <Newsletter />
        <NavBar />
        <Footer />
      </ResizeProvider>
    </>
  )
}

export default Home