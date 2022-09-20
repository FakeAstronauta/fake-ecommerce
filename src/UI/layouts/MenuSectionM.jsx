import React from 'react'
import { Link } from 'react-router-dom';

import { linksInfo } from '../../utils/MenuOptions'
import { menuContents } from '../../utils/MenuContents'
import { displace, bring, hideSideMenu } from '../../animations/OwnAnimations'

import './MenuSection.css'

const linksContentsV = Object.values(linksInfo);

const MenuSectionM = ({ sideMenuRef }) => {
    let [index, setIndex] = React.useState();
    let displaceRef = React.useRef();
    let linksRef = React.useRef();
    let titleRef = React.useRef();
    let headElemRef = React.useRef();

    return (
        <section ref={sideMenuRef} className='m-sub-menu white-bg basic-anim displaced' >
            <div className='m-top-bar'>
                <div className='none' ref={headElemRef}>
                    <div className='center-txt title-align lato bold first-txt'>
                        <span ref={titleRef}>
                            {index}
                        </span>
                    </div>
                    <div className='abs-header pointer back-align' onClick={() => bring(displaceRef, linksRef, headElemRef)}>
                        <span className='material-icons'>
                            keyboard_arrow_left
                        </span>
                    </div>
                </div>

                <div className='abs-header pointer close-align' onClick={() => hideSideMenu(sideMenuRef, linksRef, displaceRef, headElemRef)}>
                    <span className='material-icons'>
                        close
                    </span>
                </div>
            </div>
            <div className='m-nav-links'>
                <div ref={linksRef} className='abs lato basic-anim hide-side '>
                    <div className='r-padding'>
                        <ul>
                            <li>
                                <div className='bold'>
                                    {menuContents[0].links.title}
                                </div>
                            </li>
                            {index && menuContents[linksContentsV.indexOf(index)].links.contents.map((e, i) =>
                                <li key={`menu-mobile-${i}`}>
                                    <Link to="/" >
                                        <span>{e}</span>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div ref={displaceRef} className='basic-anim '>
                    <ul >
                        {linksContentsV.map((e, i) =>
                            <li  key={`menu-mobile-nav-${i}`}
                            onClick={() => { setIndex(e); displace(displaceRef, linksRef, headElemRef) }}>
                                <div className='rel pointer'>
                                    <span className='m-title playfair'>
                                        <span className="material-icons abs-arrow">
                                            navigate_next
                                        </span>
                                        {e}
                                    </span>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MenuSectionM