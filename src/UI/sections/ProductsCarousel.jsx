import React from 'react'
import './ProductCarousel.css'
import { moveCarousel, rotateArr, removeAnimation } from '../../animations/ProductsCarousel'

const ProductsCarousel = () => {
  let imgArr = React.useRef([]);

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

  let startCarousel = (firstLoad, isResize) => {
    moveCarousel(imgArr, 5, firstLoad, isResize);
  }

  React.useEffect(() => {
    startCarousel(true, false);
  }, [])

  return (
    /* this must be extensible */
    <div className='categories-carousel'>
      <div className='grid-layout'>
        <div className='grid centered padding-bottom-30'>
          <div className="horizontal-scroll">
            <div className='tab'>
              <ul>
                <li className='item'>
                  <div className='label-sm'>
                    <span className='inner-elem'>
                      <span>The best</span>
                    </span>
                  </div>
                </li>
                <li className='item'>
                  <div className='label-sm'>
                    <span className='inner-elem'>
                      <span>Living the moment</span>
                    </span>
                  </div>
                </li>
                <li className='item'>
                  <div className='label-sm'>
                    <span className='inner-elem'>
                      <span>Stay in</span>
                    </span>
                  </div>
                </li>
              </ul>
              <div className='line-wrapper'>
                <span className='line'></span>
              </div>
            </div>
          </div>
          <div className='grid-layout'>
            <div className='grid centered'>
              <div className="carousel">
                <div className="carousel-slider">
                  {
                    data.map((e, i) =>
                      <div
                        key={`prod-carrousel-${i}`}
                        ref={(elem) => imgArr.current[i] = elem}
                        className={`product ${i}`}>
                        {/* <div className='rel inner-cont-img'> */}
                          <img src={`https://picsum.photos/id/${e}/190/220`}></img>
                        {/* </div> */}
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="product-info col-3">
                <h2 className='title-label '>
                  Lorem ipsum dolor, sit amet consectetur.
                </h2>
                <div className="price">$ 2000.00</div>
                <div className='button-primary'>
                  <span className='link-content'>Take your time</span>
                </div>
              </div>
            </div>
          </div>
          {/* <h3
            className='lato btn-carrousel r-ul txt carousel-title'
            onClick={() => startCarousel(false, false)}
          >NEXT</h3> */}
        </div>
      </div>
    </div>
  )
}

export default ProductsCarousel