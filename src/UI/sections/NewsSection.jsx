import React, { useEffect, useRef } from "react";
import { useResize } from '../../context/ResizeProvider'

import './NewsSection.css';

export default function NewsSection() {
    let resized = useResize();
    
    // memoization to avoid reload the api?
    let contentRef = useRef([]).current;
    const desktopSize = ['col-6', 'col-8'];
    const mobileSize = ['col-10', 'col-12'];

    return (
        <div className='news-section'>
            <div className="inner-cont">
                <div className="distribute">
                    <div className={`content-box ${resized > 768 ? desktopSize[0] : mobileSize[1]}`}
                    >
                        <div className={`wrapper ${resized > 768 ? desktopSize[1] : mobileSize[1]}`}
                        >
                            <img src='https://picsum.photos/id/1011/500/630' className="abs" />
                        </div>
                    </div>
                    <div className={`playfair ${resized > 768 ? desktopSize[0] : mobileSize[1]}`}>
                        <div ref={el => contentRef[2] = el} className={`text-box ${resized > 768 ? desktopSize[1] : mobileSize[0]}`}>
                            <div id='text-box'>
                                <div className="main-content">
                                    <h1 className="playfair section-title">Always the best for our costumers</h1>
                                    <p className="lato">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos sequi minima tempore voluptas illo reprehenderit suscipit, neque nisi facere impedit odit, fugiat magnam ullam consectetur nesciunt voluptates nemo id. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}