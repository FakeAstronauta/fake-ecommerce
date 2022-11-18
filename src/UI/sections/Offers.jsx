import React from "react";
import './Offers.css';
import { useState, useEffect } from 'react';

export default function Offers() {
    return (
        <div id='offers'>
            <img src='https://picsum.photos/id/1005/400/600'></img>
            <div id='text'>
                <h2 className="playfair">Consectetur adipisicing elit</h2>
                <p className="lato">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique enim recusandae obcaecati itaque quos dolores!</p>
            </div>
        </div>
    );
}