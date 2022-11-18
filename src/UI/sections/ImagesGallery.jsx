import React from "react";
import './ImagesGallery.css';
import { useState, useEffect } from 'react';

export default function ProductGallery() {
    let data = [
        1060,
        1061,
        1062,
        1063,
        1064
    ]
    return (<>
        <div id="images-gallery">
            <div id='body'>
                <div id='images-container'>
                    {data.map((e, i) =>
                        <div key={`img-gallery-${i}`} className="img-wrap-one">
                            <div className="gradient"></div>
                            <img src={`https://picsum.photos/id/${e}/400/600`}></img>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>)
}