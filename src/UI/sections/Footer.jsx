import React from 'react'
import './Footer.css'

const Footer = () => {
    let arr = [
        "Region / Language",
        "Customer Service",
        "About Us",
        "Legal & Cookies"
    ];

    let arrIcons = [
        'check_box',
        'radio_button_checked',
        'grade',
        'key',
        'undo'
    ];

    return (
        <footer className='red-bg white-font lato foot-top-pad foot-font'>
            <div className='rel foot-pad'>
                <div className='flex foot-bottom-pad'>
                    {arr.map((e)=>
                    <div className='col-2'>
                        <span>{e}</span>
                    </div>
                    )}
                    <div className='col-2 txt-alg-r'>
                        <span>+</span>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-icons col-6'>
                        <ul className='flex foot-top-pad foot-bottom-pad'> 
                            {arrIcons.map((e, i)=>
                                <li key={`foot-icons-${i}`}>
                                    <span className='material-icons'>
                                        {e}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='col6'>
                        <div className='foot-top-pad foot-bottom-pad'>
                            2022 Montreal Botéz
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer