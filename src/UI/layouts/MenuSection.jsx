import React from 'react'
import { Link } from 'react-router-dom';
import { menuContents } from '../../utils/MenuContents'
import { toggleUl } from '../../animations/OwnAnimations'

import './MenuSection.css'

const MenuSection = ({ num, subMenuRef }) => {
    let linkRef = React.useRef();
    let [linksList, setLinksList] = React.useState([]);

    let content = menuContents[num]
    let list = content.links.contents;
    let limit = content.links.limit;
    let editorial = content.editorial;

    /* arrange the contents to fit in dropdown menu */
    React.useEffect(() => {
        let g = [];
        let i = []

        list.forEach((e) => {
            i.push(e);
            if (i.length == limit) {
                g.push(i);
                i = [];
            }
        })

        if (i.length != 0) {
            g.push(i);
        }

        setLinksList(g);
    }, []);


    return (
        <section ref={subMenuRef} className='sub-menu blink'>
            {content.image &&
                <div className='img-pad col-2'>
                    <div className='lato editorial__grid rel'>
                        <div className='image-wrapper col-5'>
                            <Link to="/">
                                <div>
                                    <img src={`https://picsum.photos/id/${content.imageId}/200/300`} alt="Campaign" className='img-sub' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            <div className={`sub-menu__links col-${content.links.columnWidth}`}>
                <div className='links__list lato'>
                    <div className='txt first-txt r-margin-b black-font bold '>
                        {content.links.title}
                    </div>
                    <div className='list__grid'>
                        {linksList.map((links, i) =>
                            <div key={`menu-${i}`} className={`col-${content.links.columnWidthCont}`}>
                                {links.map((link, j) =>
                                    <div key={`menu-inner-${j}`}>
                                        <Link to="/">
                                            <span className='txt first-txt r-margin-b black-font normal'>
                                                {link}
                                            </span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {editorial &&
                <div className='sub-menu__editorial lato col-5'>
                    <div>
                        {editorial.title &&
                            <div >
                                <Link to='/' className="txt first-txt r-margin-b black-font bold">
                                    <span>
                                        {editorial.title}
                                    </span>
                                </Link>
                            </div>
                        }
                        <div className='lato editorial__grid'>
                            <div className='image-wrapper col-5'>
                                <Link to="/">
                                    <div className='rel'>
                                        <img src={`https://picsum.photos/id/${editorial.imageId}/200/300`} alt="Campaign" className='img-sub' />
                                    </div>
                                </Link>
                            </div>
                            <div className='editorial__wrapper col-7 flex'>
                                <span className='txt first-txt r-margin-b black-font bold'>
                                    {editorial.contents.editorialTitle}
                                </span>
                                <p className='r-paragraph normal gray-font'>
                                    {editorial.contents.editorialContent}
                                </p>
                                < Link to="/">
                                    <span>
                                        <div ref={linkRef} className='ul-links r-ul gray-font txt first-txt'>
                                            {editorial.contents.editorialButtons}
                                        </div>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section >
    )
}

export default MenuSection