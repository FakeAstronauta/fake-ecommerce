import React from 'react'
import { Link } from 'react-router-dom';
import MenuSection from '../layouts/MenuSection';
import { showElem, linkUl } from '../../animations/OwnAnimations'
import {linksInfo} from '../../utils/MenuOptions'

const NavBarLinks = ({ lastElem, linkRef, menuRef, subMenuRef, headerRef }) => {
    let [currentNum, setCurrentNum] = React.useState();

    const linksContents = Object.keys(linksInfo);

    return linksContents.map((e, i) =>
        <li key={i}>
            {<Link
                to={`/${e}`}
                onMouseOver={() => {
                    setCurrentNum(i);
                    showElem(menuRef, subMenuRef);
                    linkUl(headerRef, linkRef, lastElem, i);
                }
                }>
                <div ref={el => linkRef.current[i] = el}
                    className='txt first-txt bold ul-links hided'>
                    {linksInfo[e]}
                </div>
            </Link>}
            {i == currentNum && <MenuSection num={currentNum} subMenuRef={subMenuRef}/>}
        </li>
    )
}


export default NavBarLinks