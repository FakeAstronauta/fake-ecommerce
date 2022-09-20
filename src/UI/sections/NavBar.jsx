import React from 'react';
import { Link } from 'react-router-dom';

import NavBarLinks from '../components/NavBarLinks';
import NavBarM from './NavBarM';

import './NavBar.css'
import '../../animations/OwnAnimations.css'
import { hideElem, clearUl, hideHeader, lettersW } from '../../animations/OwnAnimations'


const NavBar = () => {
    const bgRef = React.useRef();
    const headerRef = React.useRef();
    const menuRef = React.useRef();
    const subMenuRef = React.useRef();
    const linkRef = React.useRef([]);
    let lastElem = React.useRef(null);

    hideHeader(headerRef, bgRef);

    return (
        <>
            <header ref={headerRef} className='header w-color'>
                <div ref={bgRef} className='bg-short white-bg' style={{ 'opacity': '0' }}></div>
                <div
                    ref={menuRef}
                    className='bg-extended white-bg remove'
                    onMouseMove={() => {
                        lettersW(headerRef);
                        clearUl(subMenuRef, lastElem);
                        hideElem(menuRef, subMenuRef)
                    }}></div>
                <section className='top' onMouseOver={() => {
                    lettersW(headerRef);
                    clearUl(subMenuRef, lastElem);
                    hideElem(menuRef, subMenuRef)
                }}>
                    <nav className='header--arrange'>
                        <ul className='flex wide-dist'>
                            <span className='header__out-in'></span>
                            <li>
                                <Link to='/'>
                                    <span className='playfair header__title'>MONTREAL BOTÉZ</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/' id='search' className="material-icons header__icons">
                                    search
                                </Link>
                                <Link to='/' id='account-logo' className="material-icons header__icons">
                                    person_outline
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <nav className='nav-bar--arrange'>
                        <ul className='flex wide-dist lato rel'>
                            <NavBarLinks
                                linkRef={linkRef}
                                lastElem={lastElem}
                                menuRef={menuRef}
                                subMenuRef={subMenuRef}
                                headerRef={headerRef}
                            />
                            {/* <li>
                                <Link to="/">
                                    <div className='nav-bar__links'>
                                        MONTREAL BOTÉZ
                                    </div>
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </section>
            </header>
            
        </>
    );
}

export default NavBar