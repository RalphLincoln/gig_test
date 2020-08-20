import React from 'react'

// IMPORTING FROM REACT ICONS
import { FiHome, FiShare2 } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';

// IMPORTING BRAND IMAGE
import Banner from '../../Images/banner.png';
import pic1 from '../../Images/1.png';
import pic2 from '../../Images/2.png';
import pic3 from '../../Images/3.png';
import pic4 from '../../Images/4.png';
import pic5 from '../../Images/5.png';
import pic20 from '../../Images/20.png';

// IMPORTING CUSTOM CSS
import './sideNav.css';

const SideNav = () => {
    return (
        <div className='navs d-none d-md-block'>
            <nav>

                <img src={Banner} alt="banner" className='img-fluid mx-auto pic pt-4 pb-4' />
                <a href=""><FiHome className="row icons mx-auto " /></a>
                <a href=""><FiShare2 className="row icons mx-auto" /></a>
                <a href=""><BsPeople className="row icons mx-auto" /></a>
                <a href=""><FaRegNewspaper className="row icons mx-auto" /></a>

                <div className="pic mb-2 mt-4"></div>

                <a className='row p-2 pl-4 mx-auto' href="">
                    <img src={pic1} alt="pic1" />
                </a>
                <a className='row p-2 pl-4 mx-auto' href="">
                    <img src={pic2} alt="pic1" />
                </a>
                <a className='row p-2 pl-4 mx-auto' href="">
                    <img src={pic3} alt="pic1" />
                </a>
                <a className='row p-2 pl-4 mx-auto' href="">
                    <img src={pic4} alt="pic1" />
                </a>
                <a className='row p-2 pl-4 mx-auto' href="">
                    <img src={pic5} alt="pic1" />
                </a>

                <div className="pic mb-5 mt-2"></div>

                <a className='row p-2 mx-auto' href="">
                    <img src={pic20} alt="pic20" />
                </a>
            </nav>
        </div>
    )
}

export default SideNav
