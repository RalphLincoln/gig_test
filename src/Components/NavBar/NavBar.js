import React from 'react';

// IMPORTING IMAGES
import FCMB from '../../Images/image.png';
import Pic from '../../Images/pic.png';

// IMPORTING FROM REACT ICONS
import { FaRegBell, FaAward } from 'react-icons/fa';
import { FiShield, FiMoreHorizontal } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { GrTextAlignLeft } from 'react-icons/gr';


// IMPORTING CUSTOM CSS
import './navbar.css'

const NavBar = () => {
    return (
        <div className="container-fluid nav-bg p-4">
            <div className="row">
                <div className="col-12 my-auto col-md-1">
                    <li className="nav-item list-unstyled dropdown">
                        <a className="nav-link text-dark pt-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <GrTextAlignLeft className='' style={{ fontSize: '25px' }} />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </div>
                <div className="col-12 col-md-3 my-auto ml-0">
                    <div className=" pl-3 row">
                        <div className='row  vertical pr-3'>
                            <img src={FCMB} className="img-fluid" alt="fcmb" />
                            <p className="font-weight-bold my-auto pl-2 navP">FCMB: Mobile Banking</p>
                            <li className="nav-item list-unstyled dropdown">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FiMoreHorizontal className='my-auto text-dark' style={{ fontSize: '18px' }} />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-auto col-md-4">
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn my-2 my-sm-0" type="submit"> <BsSearch /> </button>
                        <input className="form-control no-border mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col-xs-12 d-none d-md-block my-auto">
                            <FaRegBell style={{ fontSize: '22px' }} />
                            <button style={{ backgroundColor: '#4DBD98' }} className='btn text-white ml-4 pt-0 btn-sm'>
                                <FiShield className='img-vertical pr-1' />
                                <span className='pl-1 sm-span'>OWNER</span>
                            </button>
                            <FaAward className='pl-2' style={{ fontSize: '28px', color: '#4DBD98' }} />
                        </div>
                        <div className="col-xs-12">
                            <div className="row">
                                <div className="col">
                                    <img src={Pic} className="img-fluid ml-3" alt="pic" />
                                </div>
                                <div className="col col-xs-12">
                                    <div className="">
                                        <p className=' d-inline text-dark name'>Mark Dawn</p>
                                        <p style={{ color: '#23B3E8' }} className='tag roll'>Markdawn@natterbase</p>
                                    </div>

                                    {/* <li className="nav-item list-inline-item list-unstyled mt-0 dropdown">
                                        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar