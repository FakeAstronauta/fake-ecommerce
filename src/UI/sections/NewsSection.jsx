import  React, { useState, useEffect } from "react";
import './NewsSection.css';
import useApi from "../../hooks/useApi";

export default function NewsSection() {
    // memoization to avoid reload the api?
    let { data } = useApi('photos', '/1926769', '&size=small');

    return (
        data &&
        <div id='news-section' >
            <div id='red-box'>
                <div id='text-box'>
                    <h2 className="playfair">Neque nisi facere impedit</h2>
                    <p className="lato">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos sequi minima tempore voluptas illo reprehenderit suscipit, neque nisi facere impedit odit, fugiat magnam ullam consectetur nesciunt voluptates nemo id.</p>
                </div>
            </div>
            <img src={data.src.portrait}></img>
        </div>
    )
}