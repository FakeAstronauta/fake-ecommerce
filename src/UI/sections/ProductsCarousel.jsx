import React from 'react'
import './HeroCarousel.css'
import { moveCarousel, rotateArr } from '../../animations/ProductsCarousel'

const ProductsCarousel = ({resized}) => {
  
  let imgArr = React.useRef([]);
  let contRef = React.useRef([]);

  let data = [
    1003,
    1009,
    1012,
    1013,
    1025,
    1035,
    1070,
    1075
  ]

  React.useEffect(() => {
    moveCarousel(imgArr, 5, false);
  }, [resized])

  return (
    /* this must be extensible */
    <div className='high-top'>
      <h3 className='playfair txt carousel-title'>SEE WHAT WE HAVE TO OFFER</h3>
      <div className='carousel-cont-s high-top'>
        {
          data.map((e, i) =>
            <div 
            key={`prod-carrousel-${i}`}
            ref={(elem) => imgArr.current[i] = elem}
            className={`small-img-cont ${i}`}>
              <div className='rel inner-cont-img'>
                <img src={`https://picsum.photos/id/${e}/400/600`}></img>
              </div>
            </div>
          )
        }
      </div>
      <h3
        className='lato btn-carrousel r-ul txt carousel-title'
        onClick={() => rotateArr(imgArr, 5, false, true, 1)}
      >NEXT</h3>
    </div>
  )
}

export default ProductsCarousel