import React from 'react'
import '../../animations/Carousel.css'
import './HeroCarousel.css'

import { moveCarousel } from '../../animations/Carousel'

const HeroCarousel = () => {
  let imgArr = React.useRef([]);
  React.useEffect(() => {
    moveCarousel(imgArr, 1, true)
  }, []);

  let data = [
    1076,
    1079,
    1083,
    1068
  ];

  return (
    <div className='carousel-cont'>
      {
        data.map((e, i) =>
          <div key={`hero-${i}`}ref={(e) => imgArr.current[i] = e} className={`img-cont ${i}`}>
            <img src={`https://picsum.photos/id/${e}/600/800`}></img>
          </div>
        )
      }
      <div className='gradient'></div>
    </div>
  )
}

export default HeroCarousel