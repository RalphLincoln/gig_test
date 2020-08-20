import React, { Component } from 'react'

// MY CUSTOM CSS
import './test.css';

// IMPORTING REACT ICONS
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

// IMPORTING IMAGES
import Group from '../Images/Group.png';



export default class Test extends Component {
    render() {
        return (
            <div className='pt-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="d-flex justify-content-between">
                                <p className='font-weight-bold heady'>Modules</p>
                                <FiMoreHorizontal className='pt-1' style={{ fontSize: '25px' }} />
                            </div>

                            <div className="card card-hove mt-2">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className='info text-left'>Apply gredient colours <br /> on the dashboard sidenav</p>
                                        <FiMoreHorizontal className='' style={{ fontSize: '25px' }} />
                                    </div>
                                    <div className="">
                                        <p className='d-inline pr-5 mr-5'> <MdAccessTime /> <span className='time vtn'>Due Aug 8</span> </p>
                                        <img src={Group} alt="group" className='img-fluid' />
                                    </div>
                                </div>
                            </div>

                            <div className="card card-hove mt-2">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className='info text-left'>Apply gredient colours <br /> on the dashboard sidenav</p>
                                        <FiMoreHorizontal className='' style={{ fontSize: '25px' }} />
                                    </div>
                                    <div className="">
                                        <p className='d-inline pr-5 mr-5'> <MdAccessTime /> <span className='time vtn'>Due Aug 8</span> </p>
                                        <img src={Group} alt="group" className='img-fluid' />
                                    </div>
                                </div>
                            </div>

                            <div className="card card-hove mt-2">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className='info text-left'>Apply gredient colours <br /> on the dashboard sidenav</p>
                                        <FiMoreHorizontal className='' style={{ fontSize: '25px' }} />
                                    </div>
                                    <div className="">
                                        <p className='d-inline pr-5 mr-5'> <MdAccessTime /> <span className='time vtn'>Due Aug 8</span> </p>
                                        <img src={Group} alt="group" className='img-fluid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 small-move">
                            <div className="d-flex justify-content-between">
                                <p className='font-weight-bold heady'>Added Test case</p>
                            </div>
                            <div className="card card-hove mt-2">
                                <div className="card-body">
                                    <div className="container">
                                        <div className="row d-flex justify-content-between">
                                            <p style={{ fontWeight: '600' }} className="heady d-inline my-auto">Make the background image blur</p>
                                            <button style={{ backgroundColor: '#4DBD98' }} className='btn textBtn'>Pass <RiArrowDropDownLine /> </button>
                                        </div>

                                        <div className="row mt-2 d-flex justify-content-between">
                                            <p style={{ fontWeight: '600' }} className="heady d-inline my-auto">Apply gredient colours on the </p>
                                            <button style={{ backgroundColor: '#4DBD98' }} className='btn textBtn'>Pass <RiArrowDropDownLine /> </button>
                                        </div>

                                        <div className="row mt-2 d-flex justify-content-between">
                                            <p style={{ fontWeight: '600' }} className="heady d-inline my-auto">Make the background image blur </p>
                                            <button style={{ backgroundColor: '#EB0E43' }} className='btn textBtn'>Pass <RiArrowDropDownLine /> </button>
                                        </div>

                                        <div className="row mt-2 d-flex justify-content-between">
                                            <p style={{ fontWeight: '600' }} className="heady d-inline my-auto">Apply gredient colours on the </p>
                                            <button style={{ backgroundColor: '#F15832' }} className='btn textBtn'>Pass <RiArrowDropDownLine /> </button>
                                        </div>

                                        <div className="row mt-2 d-flex justify-content-between">
                                            <p style={{ fontWeight: '600' }} className="heady d-inline my-auto">Make the background image blur </p>
                                            <button style={{ backgroundColor: '#4DBD98' }} className='btn textBtn'>Pass <RiArrowDropDownLine /> </button>
                                        </div>

                                        <div className="row mt-2 d-flex justify-content-between">
                                            <p style={{ fontWeight: '600' }} className="heady d-inline my-auto">Apply gredient colours on the </p>
                                            <button style={{ backgroundColor: '#EB0E43' }} className='btn textBtn'>Pass <RiArrowDropDownLine /> </button>
                                        </div>

                                        <div className="row mt-2 d-flex justify-content-between">
                                            <p style={{ fontWeight: '600' }} className="heady d-inline my-auto">Apply gredient colours on the </p>
                                            <button style={{ backgroundColor: '#F15832' }} className='btn textBtn'>Pass <RiArrowDropDownLine /> </button>
                                        </div>

                                        <div className='mt-4 d-flex justify-content-between'>
                                            <button className='btn btn1'>New Test Case</button>
                                            <button className='btn btn2 pl-5 pr-5'>Test</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 small-move">
                            <div className="">
                                <p className='font-weight-bold heady'>Quick Overview</p>
                                <div className="card rounded border-no">
                                    <div className="card-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className="card-group d-flex justify-content-center">
                                                    <div style={{ backgroundColor: '#F15832', width: '10rem' }} className="card rounded mr-3 text-white">
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between'>
                                                                <FaShoppingBag className='mt-2 icon' />
                                                                <p className='p-num'>20</p>
                                                            </div>

                                                            <p className='heady1 text-white font-weight-bold'>Total Modules</p>
                                                        </div>
                                                    </div>

                                                    <div style={{ backgroundColor: '#2E4C5C', width: '10rem' }} className="card rounded text-white">
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between'>
                                                                <FaShoppingBag className='mt-2 icon' />
                                                                <p className='p-num'>20</p>
                                                            </div>

                                                            <p className='heady1 text-white font-weight-bold'>Improvement</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-group d-flex justify-content-center mt-3">
                                                    <div style={{ backgroundColor: '#296799', width: '10rem' }} className="card rounded mr-3 text-white">
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between'>
                                                                <FaShoppingBag className='mt-2 icon' />
                                                                <p className='p-num'>14</p>
                                                            </div>

                                                            <p className='heady1 text-white font-weight-bold'>Total Test</p>
                                                        </div>
                                                    </div>

                                                    <div style={{ backgroundColor: '#F8426E', width: '10rem' }} className="card rounded text-white">
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between'>
                                                                <FaShoppingBag className='mt-2 icon' />
                                                                <p className='p-num'>20</p>
                                                            </div>

                                                            <p className='heady1 text-white font-weight-bold'>Total Failed</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-group d-flex justify-content-center mt-3">
                                                    <div style={{ backgroundColor: '#4DBD98', width: '10rem' }} className="card rounded mr-3 text-white">
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between'>
                                                                <FaShoppingBag className='mt-2 icon' />
                                                                <p className='p-num'>20</p>
                                                            </div>

                                                            <p className='heady1 text-white font-weight-bold'> Total Passed</p>
                                                        </div>
                                                    </div>

                                                    <div style={{
                                                        backgroundColor: '#3D43A2', width: '10rem'
                                                    }} className="card rounded text-white">
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between'>
                                                                <FaShoppingBag className='mt-2 icon' />
                                                                <p className='p-num'>20</p>
                                                            </div>

                                                            <p className='heady1 text-white font-weight-bold'>Total Untested</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
