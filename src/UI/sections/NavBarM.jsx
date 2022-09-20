import React from 'react'
import { Link } from 'react-router-dom';
import { hideHeader, showSideMenu } from '../../animations/OwnAnimations'
import './NavBar.css'
import '../../animations/OwnAnimations.css'
import MenuSectionM from '../layouts/MenuSectionM';

const NavBarM = () => {
    let sideMenuRef = React.useRef();
    let headerRef = React.useRef();
    let bgRef = React.useRef();

    hideHeader(headerRef, bgRef);

    return (
        <>
            <header ref={headerRef} className="m-header w-color">
                <div ref={bgRef} className='m-bg-short white-bg' style={{ 'opacity': '0' }}></div>
                <section className='rel' style={{ 'opacity': '0px' }}>
                    <nav className='m-header--arrange'>
                        <ul className='wide-dist flex'>
                            <li>
                                <div className='pointer'>
                                    <Link to="/" onClick={() => showSideMenu(sideMenuRef)}>
                                        <span className='material-icons'>
                                            menu
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to='/'>
                                        <span className='playfair m-header__title'>
                                            MONTREAL BOTÉZ
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/">
                                        <span className='material-icons'>
                                            search
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
            <MenuSectionM sideMenuRef={sideMenuRef} />
        </>
    )
}

export default NavBarM